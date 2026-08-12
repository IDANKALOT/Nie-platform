import Link from 'next/link'
import { articleHref } from '@/lib/articles/href'
import type { ArticleContent } from '../types'

const content: ArticleContent = {
  title: 'Vilka Dokument Behöver Du För Ett NIE Nummer?',
  description:
    'Grundlistan över dokument för en NIE-ansökan, plus vad som ändras beroende på om du köper bostad, arbetar eller öppnar ett bankkonto.',
  breadcrumbHome: 'Hem',
  breadcrumbLabel: 'NIE Nummer Dokument',
  h1: 'Vilka Dokument Behöver Du För Ett NIE Nummer?',
  updatedLabel: 'Senast uppdaterad',
  lastUpdated: '2026-08-12',
  intro: (
    <p>
      Alla NIE-ansökningar kräver samma grunddokument, plus ett dokument som ändras
      beroende på skälet till din ansökan. Saknade eller felaktiga dokument är den
      största enskilda orsaken till avslagna ansökningar i vår{' '}
      <Link href={articleHref('how-to-get-nie-number', 'sv')}>
        steg-för-steg-process
      </Link>
      , så det är värt att jämföra denna lista med din situation innan du bokar en tid.
    </p>
  ),
  body: (
    <>
      <section>
        <h2>Grunddokument, obligatoriska för alla sökande</h2>
        <ul>
          <li>Ett giltigt pass, plus en kopia av identifikationssidorna</li>
          <li>Den ifyllda och undertecknade EX-15-ansökningsblanketten</li>
          <li>Kvitto på betalning av den administrativa avgiften Modelo 790, código 012</li>
          <li>
            Ett aktuellt passfoto (krävs av vissa, men inte alla kontor — kontrollera
            med din specifika station eller ditt konsulat)
          </li>
        </ul>
      </section>

      <section>
        <h2>Dokumentet som ändras beroende på skäl</h2>
        <p>Du måste också visa varför du behöver NIE. De vanligaste underlagen är:</p>
        <ul>
          <li>
            <strong>Bostadsköp:</strong> ett undertecknat reservationsavtal (contrato de
            reserva) eller handpenningsavtal med säljare eller mäklare
          </li>
          <li>
            <strong>Arbete:</strong> ett undertecknat jobberbjudande eller
            anställningsavtal från en spansk arbetsgivare
          </li>
          <li>
            <strong>Öppna bankkonto:</strong> ett brev från banken som bekräftar att de
            kräver ett NIE för att fortsätta
          </li>
          <li>
            <strong>Bli egenföretagare (autónomo):</strong> bevis på registrerad
            ekonomisk verksamhet eller en affärsplan
          </li>
          <li>
            <strong>Inget specifikt skäl ännu (allmänt intresse):</strong> vissa kontor
            accepterar en allmän avsiktsförklaring om investering eller bosättning,
            även om detta hanteras mindre konsekvent än kategorierna ovan
          </li>
        </ul>
      </section>

      <section>
        <h2>Om ett dokument inte är på spanska</h2>
        <p>
          Dokument utfärdade utanför Spanien behöver ibland en auktoriserad spansk
          översättning, och i vissa fall en apostille för att bekräfta att originalet
          är äkta. Om detta gäller beror på dokumenttyp och det kontor som behandlar
          din ansökan — det är värt att bekräfta detta innan din tid, eftersom en
          översättning vanligtvis tar längre tid att ordna än själva tidsbokningen.
        </p>
      </section>
    </>
  ),
  faqHeading: 'Vanliga frågor',
  faq: [
    {
      question: 'Behöver jag ta med original, eller räcker kopior?',
      answer:
        'Ta med original plus kopior. Kontor kontrollerar vanligtvis originalet och behåller kopian.',
    },
    {
      question: 'Vad händer om jag kommer med fel underlag?',
      answer:
        'Din ansökan avslås vanligtvis direkt, och du måste boka en ny tid med rätt dokument — det finns ingen lösning samma dag.',
    },
    {
      question: 'Behöver mitt pass ha en minsta giltighetstid?',
      answer:
        'Det bör vara giltigt inom överskådlig framtid — ett utgånget eller snart utgående pass är skäl för avslag på vissa kontor.',
    },
    {
      question: 'Kan jag använda körkort istället för pass?',
      answer:
        'Nej, ett giltigt pass (eller nationellt id-kort för vissa EU-medborgare) krävs; ett körkort accepteras inte som legitimation för en NIE-ansökan.',
    },
  ],
  ctaHeading: 'Osäker på vilka dokument du behöver?',
  ctaText:
    'Espallo granskar din situation och förbereder exakt rätt dokumentuppsättning för din ansökan, så inget avslås på grund av felaktiga papper.',
  ctaButton: 'Få hjälp att förbereda din NIE-ansökan',
  disclaimer:
    'Espallo är en administrativ tjänst, inte en advokatbyrå. Vi ger ingen juridisk rådgivning. Våra samarbetande jurister och notarier i Spanien har ett direkt uppdragsförhållande med dig som kund.',
}

export default content
