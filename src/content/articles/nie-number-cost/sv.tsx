import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Vad Kostar Ett NIE Nummer i Spanien?',
  description:
    'Skillnaden mellan den officiella myndighetsavgiften för ett NIE-nummer och priset för att låta en tjänst sköta hela ansökan åt dig.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Nummer Pris',
  h1: 'Vad Kostar Ett NIE Nummer i Spanien?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Det finns två olika kostnader folk menar när de frågar om NIE-pris, och just
      sammanblandningen av dem är där förvirringen oftast uppstår: den lilla
      officiella myndighetsavgiften, och den (valfria) kostnaden för att betala någon
      att sköta ansökan åt dig.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Den officiella myndighetsavgiften</h2>
        <p>
          Att ansöka om NIE kräver betalning av en fast administrativ avgift, Modelo
          790 código 012, direkt till den spanska skattemyndigheten (Agencia
          Tributaria) — ett blygsamt, statligt fastställt belopp, oberoende av
          bostadsvärde, inkomst eller nationalitet. Avgiften ändras inte beroende på om
          du ansöker själv eller genom ett ombud; den betalas under alla omständigheter.
        </p>
      </section>

      <section>
        <h2>Vad en tjänst som Espallo faktiskt tar betalt för</h2>
        <p>
          Avgiften du betalar en tjänst är inte för själva NIE-numret — den är för
          arbetet med att få tiden, förbereda EX-15 korrekt, lämna in åt dig, och slippa
          resa för det. Espallo tar ett enda fast pris på 215 EUR per ansökan, som
          täcker hela processen från början till slut — även i fall där du aldrig
          sätter din fot i Spanien.
        </p>
      </section>

      <section>
        <h2>Är det värt att betala för hjälp?</h2>
        <p>
          Är du redan i Spanien, bekväm med spansk byråkrati, och kan enkelt få en cita
          previa, kostar det bara myndighetsavgiften att göra det själv. Är du utomlands,
          har en pressad tidsplan (till exempel ett tillträdesdatum för en bostad),
          eller redan fått en ansökan avslagen en gång, är tiden du sparar genom att
          slippa boka om eller lämna in igen ofta det folk faktiskt betalar för. Se vår{' '}
          <Link href={articleHref('how-to-get-nie-number', 'sv')}>
            steg-för-steg-guide
          </Link>{' '}
          för att bedöma hur mycket av processen du är bekväm med att sköta själv.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Betalar jag myndighetsavgiften även om jag använder en tjänst?',
      answer:
        'Ja. Avgiften Modelo 790 código 012 betalas till den spanska skattemyndigheten oavsett vem som lämnar in din ansökan — den är separat från en eventuell tjänsteavgift.',
    },
    {
      question: 'Kostar NIE mer för bostadsköpare än andra sökande?',
      answer:
        'Nej, myndighetsavgiften är densamma oavsett skälet till ansökan.',
    },
    {
      question: 'Finns det dolda kostnader i ansökningsprocessen?',
      answer:
        'Den huvudsakliga extrakostnaden att budgetera för är dokumentförberedelse — auktoriserade översättningar eller apostiller, om något av dina dokument kräver det, vilket varierar i pris mellan leverantörer.',
    },
    {
      question: 'Vad ingår i Espallos fasta pris?',
      answer:
        'Hela ansökningsprocessen: blankettförberedelse, tidsbokning, inlämning och uppföljning tills ditt NIE-intyg är utfärdat — inga separata avgifter per steg.',
    },
  ],
  ctaHeading: 'Vet priset i förväg',
  ctaText:
    'Espallo tar ett fast pris på 215 EUR för hela NIE-ansökan — ingen timdebitering, inga överraskande avgifter.',
  ctaButton: 'Skaffa ditt NIE-nummer',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
