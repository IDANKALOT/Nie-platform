import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Slik Får Du Et NIE-Nummer Fra Utlandet',
  description:
    'Søknad hos et spansk konsulat i ditt eget land: hva som er annerledes enn i Spania, hva du kan forvente av bookingsystemet, og når en representant gir mer mening.',
  breadcrumbHome: 'Hjem',
  breadcrumbLabel: 'NIE Fra Utlandet',
  h1: 'Slik Får Du Et NIE-Nummer Fra Utlandet',
  updatedLabel: 'Sist oppdatert',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Planlegger du ikke en reise til Spania, er søknad gjennom ditt lokale spanske
      konsulat den direkte statlige veien. Den følger samme regler som søknad i
      Spania, men den praktiske opplevelsen — booking, dokumenter, henting —
      er forskjellig nok til at det er verdt å vite hva som venter før du starter.
      (Vil du heller hoppe over konsulatet helt, se vår side om{' '}
      <Link href={articleHref('nie-without-travelling', 'no')}>
        å få NIE uten å reise
      </Link>
      , via fullmakt.)
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Konsulatenes timesystemer varierer fra land til land</h2>
        <p>
          Hvert spanske konsulat administrerer sin egen timekalender, og
          etterspørselen varierer enormt — noen konsulater tilbyr timer innen få
          uker, andre er fullbooket i måneder, spesielt i land med mange utflyttede
          eller boligkjøpere. Det finnes ingen mulighet til å booke hos et annet
          konsulat enn det som dekker bostedet ditt.
        </p>
      </section>

      <section>
        <h2>Hva som ofte er annerledes enn å søke i Spania</h2>
        <p>
          Konsulater krever oftere bekreftede oversettelser av dokumentasjonsbevis,
          siden de underliggende papirene (et jobbtilbud, en boligkontrakt) ofte er
          utstedt utenfor Spania. Noen konsulater sender også NIE-sertifikatet med
          post i stedet for å utlevere det ved timen, noe som legger til ekstra tid du
          bør budsjettere med. Sjekk kravene til ditt konkrete konsulat direkte, siden
          de ikke er standardiserte på tvers av land.
        </p>
      </section>

      <section>
        <h2>Hvis ventetiden er for lang</h2>
        <p>
          Når timekalenderen til ditt nærmeste konsulat er fullbooket lenger frem enn
          tidsplanen din tillater, er det praktiske alternativet å søke via fullmakt
          gjennom en Spania-basert representant, som i stedet søker hos en
          politistasjon i Spania på dine vegne. Slik fungerer Espallos tjeneste —
          ingen konsulattime nødvendig.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Ofte stilte spørsmål',
  faq: [
    {
      question: 'Kan jeg søke hos hvilket som helst spansk konsulat, eller bare det nærmeste?',
      answer:
        'Bare konsulatet som dekker ditt registrerte bosted — du kan ikke booke hos et konsulat i et annet område for kortere ventetid.',
    },
    {
      question: 'Koster det mer å søke hos konsulatet enn i Spania?',
      answer:
        'Myndighetsgebyret er det samme uansett; den eneste sannsynlige ekstrakostnaden er oversettelse av dokumenter, hvis konsulatet ditt krever det.',
    },
    {
      question: 'Hvordan mottar jeg NIE-sertifikatet mitt hvis jeg søker hos konsulatet?',
      answer:
        'Det varierer fra konsulat til konsulat — noen utleverer det ved en oppfølgende time, andre sender det med post. Bekreft prosessen når du booker.',
    },
    {
      question: 'Går det raskere å bruke en representant i Spania enn mitt lokale konsulat?',
      answer:
        'Ofte ja, hvis konsulatet ditt har lange ventetider, siden en representant søker direkte hos en spansk politistasjon i stedet for å vente på en konsulattime.',
    },
  ],
  ctaHeading: 'For lang ventetid hos konsulatet?',
  ctaText:
    'Espallo søker om NIE-nummeret ditt i Spania via fullmakt — ingen konsulattime nødvendig, uansett hvor du er.',
  ctaButton: 'Hopp over konsulatventingen',
  disclaimer:
    'Espallo er et administrativt tjenestebyrå, ikke et advokatfirma. Vi gir ikke juridisk rådgivning. Våre samarbeidende advokater og notarer i Spania har et direkte klientforhold med deg.',
}

export default content
