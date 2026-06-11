import { PDFDocument } from 'pdf-lib'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { ApplicationData } from '@/types'

function parseDateParts(dateStr: string): { day: string; month: string; year: string } {
  if (!dateStr) return { day: '', month: '', year: '' }
  const parts = dateStr.split('-')
  if (parts.length === 3) return { day: parts[2], month: parts[1], year: parts[0] }
  return { day: '', month: '', year: '' }
}

function splitFullName(fullName: string): { firstName: string; lastName1: string; lastName2: string } {
  const parts = (fullName || '').trim().split(/\s+/)
  if (parts.length === 1) return { firstName: parts[0], lastName1: '', lastName2: '' }
  if (parts.length === 2) return { firstName: parts[0], lastName1: parts[1], lastName2: '' }
  return { firstName: parts[0], lastName1: parts[1], lastName2: parts.slice(2).join(' ') }
}

const GENDER_OPTIONS: Record<string, string> = {
  male: 'Hombre',
  female: 'Mujer',
}

const MARITAL_OPTIONS: Record<string, string> = {
  single: 'Soltero',
  married: 'Casado',
  widowed: 'Viudo',
  divorced: 'Divorciado',
  partnership: 'Casado',
}

const PURPOSE_CHECKBOXES: Record<string, string[]> = {
  property_purchase: ['Residencia temporal', 'No activo'],
  bank_account: ['Residencia temporal', 'No activo'],
  work: ['Residencia temporal', 'Trabajador por cuenta ajena'],
  investment: ['Residencia temporal', 'No activo'],
  other: ['Residencia temporal', 'No activo'],
}

export async function generateEX18PDF(data: ApplicationData): Promise<Uint8Array> {
  const pdfBytes = readFileSync(join(process.cwd(), 'public', 'EX-18.pdf'))
  const pdfDoc = await PDFDocument.load(pdfBytes)
  const form = pdfDoc.getForm()

  function setText(fieldName: string, value: string) {
    try { form.getTextField(fieldName).setText(value || '') } catch {}
  }

  function checkBox(fieldName: string) {
    try { form.getCheckBox(fieldName).check() } catch {}
  }

  function setRadio(fieldName: string, option: string) {
    try { form.getRadioGroup(fieldName).select(option) } catch {}
  }

  // Name
  const { firstName, lastName1, lastName2 } = splitFullName(data.full_name)
  setText('Nombre', firstName)
  setText('1er Apellido', lastName1)
  setText('2 Apellido', lastName2)

  // Passport
  setText('PASAPORTE', data.passport_number)

  // Gender
  const genderOption = GENDER_OPTIONS[data.gender]
  if (genderOption) setRadio('Sexo', genderOption)

  // Date of birth
  const dob = parseDateParts(data.date_of_birth)
  setText('Dia_Nacimiento', dob.day)
  setText('Mes_Nacimiento', dob.month)
  setText('Año_Nacimiento', dob.year)

  // Birth info
  setText('Lugar', data.place_of_birth)
  setText('Pais', data.country)
  setText('Nacionalidad', data.nationality)

  // Marital status
  const maritalOption = MARITAL_OPTIONS[data.marital_status]
  if (maritalOption) setRadio('Estado Civil', maritalOption)

  // Contact
  setText('Teléfono móvil', data.phone)
  setText('email', data.email)

  // NIE purpose → check relevant boxes
  const boxes = PURPOSE_CHECKBOXES[data.nie_purpose] ?? PURPOSE_CHECKBOXES.other
  for (const box of boxes) checkBox(box)

  // Signature date (today)
  const today = new Date()
  setText('Dia_FIrma', String(today.getDate()).padStart(2, '0'))
  setText('Mes_Firma', String(today.getMonth() + 1).padStart(2, '0'))
  setText('Año_Firma', String(today.getFullYear()))
  checkBox('Check firmante')

  // Embed signature image on page 2 (0-indexed = page index 1)
  if (data.signature_url) {
    try {
      const sigRes = await fetch(data.signature_url)
      const sigBytes = await sigRes.arrayBuffer()
      const sigImage = await pdfDoc.embedPng(new Uint8Array(sigBytes))
      const page = pdfDoc.getPage(1)
      const scaled = sigImage.scaleToFit(160, 55)
      page.drawImage(sigImage, { x: 55, y: 118, width: scaled.width, height: scaled.height })
    } catch {}
  }

  return pdfDoc.save()
}
