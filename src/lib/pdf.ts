import { PDFDocument, StandardFonts, rgb, degrees } from 'pdf-lib'
import type { ApplicationData } from '@/types'

export async function generateEX18PDF(data: ApplicationData): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595, 842]) // A4

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

  const { width, height } = page.getSize()
  const margin = 50
  const blue = rgb(0.105, 0.227, 0.42) // #1B3A6B

  // Header
  page.drawRectangle({
    x: 0,
    y: height - 80,
    width,
    height: 80,
    color: blue,
  })

  page.drawText('SOLICITUD DE NÚMERO DE IDENTIFICACIÓN DE EXTRANJERO', {
    x: margin,
    y: height - 35,
    size: 10,
    font: fontBold,
    color: rgb(1, 1, 1),
  })

  page.drawText('EX-18 | NIE Ansøgning', {
    x: margin,
    y: height - 55,
    size: 9,
    font,
    color: rgb(0.8, 0.8, 0.9),
  })

  // Section helper
  let y = height - 100

  function drawSection(title: string) {
    y -= 10
    page.drawRectangle({
      x: margin,
      y: y - 4,
      width: width - margin * 2,
      height: 18,
      color: rgb(0.91, 0.94, 0.98),
    })
    page.drawText(title, {
      x: margin + 4,
      y: y,
      size: 8,
      font: fontBold,
      color: blue,
    })
    y -= 22
  }

  function drawField(label: string, value: string, col: number = 0, cols: number = 1) {
    const colWidth = (width - margin * 2) / cols
    const x = margin + col * colWidth
    page.drawText(label + ':', {
      x,
      y,
      size: 7,
      font: fontBold,
      color: rgb(0.4, 0.4, 0.4),
    })
    page.drawText(value || '–', {
      x,
      y: y - 12,
      size: 9,
      font,
      color: rgb(0.1, 0.1, 0.1),
    })
    if (col === cols - 1) y -= 32
  }

  // Personal data
  drawSection('PERSONLIGE OPLYSNINGER / DATOS PERSONALES')
  drawField('Fulde navn / Nombre completo', data.full_name, 0, 2)
  drawField('Fødselsdato / Fecha de nacimiento', data.date_of_birth, 1, 2)
  drawField('Nationalitet / Nacionalidad', data.nationality, 0, 3)
  drawField('Fødested / Lugar de nacimiento', data.place_of_birth, 1, 3)
  drawField('Køn / Sexo', data.gender, 2, 3)
  drawField('Civilstatus / Estado civil', data.marital_status, 0, 2)
  drawField('E-mail', data.email, 1, 2)
  drawField('Telefon / Teléfono', data.phone, 0, 2)

  // Passport
  y -= 8
  drawSection('PASOPLYSNINGER / DATOS DEL PASAPORTE')
  drawField('Pasnummer / Número de pasaporte', data.passport_number, 0, 3)
  drawField('Udstedelsesdato / Fecha de expedición', data.passport_issue_date, 1, 3)
  drawField('Udløbsdato / Fecha de caducidad', data.passport_expiry_date, 2, 3)

  // Address
  y -= 8
  drawSection('ADRESSE / DOMICILIO')
  drawField('Adresse / Dirección', data.address, 0, 1)
  y += 10
  drawField('Postnummer / C.P.', data.postal_code, 0, 3)
  drawField('By / Localidad', data.city, 1, 3)
  drawField('Land / País', data.country, 2, 3)

  // NIE purpose
  y -= 8
  drawSection('FORMÅL MED NIE / MOTIVO DE LA SOLICITUD')
  const purposes: Record<string, string> = {
    property_purchase: 'Ejendomskøb / Compra de inmueble',
    bank_account: 'Bankkonto / Apertura cuenta bancaria',
    work: 'Arbejde / Trabajo',
    investment: 'Investering / Inversión',
    other: data.nie_purpose_other ?? 'Andet / Otros',
  }
  drawField('Formål / Motivo', purposes[data.nie_purpose] ?? data.nie_purpose, 0, 1)

  // Signature
  if (data.signature_url) {
    y -= 20
    page.drawLine({
      start: { x: margin, y },
      end: { x: width - margin, y },
      thickness: 0.5,
      color: rgb(0.8, 0.8, 0.8),
    })
    y -= 20

    page.drawText('Underskrift / Firma:', {
      x: margin,
      y,
      size: 8,
      font: fontBold,
      color: rgb(0.4, 0.4, 0.4),
    })

    try {
      const sigResponse = await fetch(data.signature_url)
      const sigArrayBuffer = await sigResponse.arrayBuffer()
      const sigImage = await pdfDoc.embedPng(sigArrayBuffer)
      const sigDims = sigImage.scale(0.4)

      page.drawImage(sigImage, {
        x: margin,
        y: y - sigDims.height - 5,
        width: sigDims.width,
        height: sigDims.height,
      })
    } catch {
      // Skip signature image if fetch fails
    }
  }

  // Footer
  page.drawText(`Genereret: ${new Date().toLocaleDateString('da-DK')} | NIE Nummer Service`, {
    x: margin,
    y: 20,
    size: 7,
    font,
    color: rgb(0.6, 0.6, 0.6),
  })

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}
