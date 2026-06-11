import { PDFDocument } from 'pdf-lib'
import { readFileSync } from 'fs'
import { join } from 'path'
import type { ApplicationData } from '@/types'

function parseDateParts(dateStr: string | null | undefined): { day: string; month: string; year: string } {
  if (!dateStr) return { day: '', month: '', year: '' }
  const parts = dateStr.split('-')
  if (parts.length === 3) return { day: parts[2], month: parts[1], year: parts[0] }
  return { day: '', month: '', year: '' }
}

function splitFullName(fullName: string): { firstName: string; lastName1: string; lastName2: string } {
  const parts = (fullName || '').trim().split(/\s+/)
  if (parts.length === 1) return { firstName: parts[0], lastName1: '', lastName2: '' }
  if (parts.length === 2) return { firstName: parts[0], lastName1: parts[1], lastName2: '' }
  // First word = first name, rest = surnames
  return { firstName: parts[0], lastName1: parts[1], lastName2: parts.slice(2).join(' ') }
}

const GENDER_OPTIONS: Record<string, string> = {
  male: 'Hombre',
  female: 'Mujer',
  other: 'Hombre',
}

const MARITAL_OPTIONS: Record<string, string> = {
  single: 'Soltero',
  married: 'Casado',
  widowed: 'Viudo',
  divorced: 'Divorciado',
  partnership: 'Casado',
}

export async function generateEX18PDF(data: ApplicationData): Promise<Uint8Array> {
  const pdfBytes = readFileSync(join(process.cwd(), 'public', 'EX-18.pdf'))
  const pdfDoc = await PDFDocument.load(pdfBytes)
  const form = pdfDoc.getForm()

  function setText(fieldName: string, value: string | null | undefined) {
    try { form.getTextField(fieldName).setText(value ?? '') } catch {}
  }

  function check(fieldName: string) {
    try { form.getCheckBox(fieldName).check() } catch {}
  }

  function setRadio(fieldName: string, option: string) {
    try { form.getRadioGroup(fieldName).select(option) } catch {}
  }

  // ── SEKTION 1: DATOS DEL SOLICITANTE ────────────────────────────────────

  // Navn (fornavn → Nombre, 1. efternavn → 1er Apellido, 2. efternavn → 2 Apellido)
  const { firstName, lastName1, lastName2 } = splitFullName(data.full_name)
  setText('Nombre', firstName)
  setText('1er Apellido', lastName1)
  setText('2 Apellido', lastName2)

  // Pas (NIE-felter efterlades tomme — det er dem der ansøges om)
  setText('PASAPORTE', data.passport_number)

  // Køn
  const genderOption = GENDER_OPTIONS[data.gender] ?? 'Hombre'
  setRadio('Sexo', genderOption)

  // Fødselsdato
  const dob = parseDateParts(data.date_of_birth)
  setText('Dia_Nacimiento', dob.day)
  setText('Mes_Nacimiento', dob.month)
  setText('Año_Nacimiento', dob.year)

  // Fødested og nationalitet
  setText('Lugar', data.place_of_birth)
  setText('Pais', data.country)          // Fødselsland
  setText('Nacionalidad', data.nationality)

  // Civilstatus
  const maritalOption = MARITAL_OPTIONS[data.marital_status] ?? 'Soltero'
  setRadio('Estado Civil', maritalOption)

  // Forældre
  setText('Nombre del padre', data.father_name ?? '')
  setText('Nombre de la madre', data.mother_name ?? '')

  // Kontakt (Domicilio en España-felterne efterlades til advokaten)
  setText('Teléfono móvil', data.phone)
  setText('email', data.email)

  // Accepter elektroniske notifikationer
  check('CONSIENTO que las comunicaciones y notificaciones se realicen por medios electrónicos 6')

  // ── SEKTION 4: SITUACIÓN EN ESPAÑA ──────────────────────────────────────

  // Altid: Residencia temporal
  check('Residencia temporal')

  // Undertype baseret på formål
  switch (data.nie_purpose) {
    case 'work':
      check('Trabajador por cuenta ajena')
      break
    case 'property_purchase':
    case 'bank_account':
    case 'investment':
    case 'other':
    default:
      check('No activo')
      break
  }

  // ── SIDE 2: Gentag fuldt navn øverst ────────────────────────────────────
  setText('Nombre y apellidos del titular', data.full_name)

  // ── FIRMA ────────────────────────────────────────────────────────────────
  const today = new Date()
  const todayDay  = String(today.getDate()).padStart(2, '0')
  const todayMonth = String(today.getMonth() + 1).padStart(2, '0')
  const todayYear  = String(today.getFullYear())

  setText('Localidad_Firma', data.signature_city ?? '')
  setText('Dia_FIrma', todayDay)
  setText('Mes_Firma', todayMonth)
  setText('Año_Firma', todayYear)
  check('Check firmante')

  // ── SIGNATUR-BILLEDE ─────────────────────────────────────────────────────
  // Firma-sektionen side 2:
  //   Check firmante: y=187
  //   Dato-felter:    y=170
  //   Barcode/kontor: y=30
  // Signaturen placeres OVER dato-linjen, på højre side af siden (x=350-530, y=195-240)
  if (data.signature_url) {
    try {
      const sigRes = await fetch(data.signature_url)
      const sigBytes = await sigRes.arrayBuffer()
      const sigImage = await pdfDoc.embedPng(new Uint8Array(sigBytes))
      const page = pdfDoc.getPage(1)
      const scaled = sigImage.scaleToFit(170, 42)
      page.drawImage(sigImage, {
        x: 350,
        y: 196,
        width: scaled.width,
        height: scaled.height,
      })
    } catch {}
  }

  return pdfDoc.save()
}
