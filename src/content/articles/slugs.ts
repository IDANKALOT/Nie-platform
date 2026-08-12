/**
 * Localized URL slugs for SEO content ("article") pages, one entry per topic.
 * Each locale's slug becomes its own physical route folder under
 * `src/app/[locale]/(public)/`, sharing an implementation via
 * `src/lib/articles/createArticlePage.tsx`. Locales that happen to share the
 * same slug string (e.g. da/sv both using "/nie-nummer-spanien") share one
 * folder; the factory figures out which locales "own" a given folder.
 *
 * Add one entry per new topic as it's built (see src/content/articles/<topic>).
 */
export const articleSlugs = {
  'nie-number-spain': {
    en: '/nie-number-spain',
    de: '/nie-nummer-spanien',
    da: '/nie-nummer-spanien',
    sv: '/nie-nummer-spanien',
    nl: '/nie-nummer-spanje',
    no: '/nie-nummer-spania',
  },
  'what-is-an-nie-number': {
    en: '/what-is-an-nie-number-in-spain',
    de: '/was-ist-eine-nie-nummer',
    da: '/hvad-er-nie-nummer',
    sv: '/vad-ar-nie-nummer',
    nl: '/wat-is-een-nie-nummer',
    no: '/hva-er-nie-nummer',
  },
  'how-to-get-nie-number': {
    en: '/how-to-get-an-nie-number-in-spain',
    de: '/wie-bekommt-man-eine-nie-nummer',
    da: '/hvordan-faar-man-nie-nummer',
    sv: '/hur-skaffar-man-nie-nummer',
    nl: '/hoe-krijg-je-een-nie-nummer',
    no: '/hvordan-far-man-nie-nummer',
  },
  'apply-for-nie-number': {
    en: '/apply-for-nie-number',
    de: '/nie-nummer-beantragen',
    da: '/nie-nummer-ansoegning',
    sv: '/ansoka-nie-nummer',
    nl: '/nie-nummer-aanvragen',
    no: '/soke-om-nie-nummer',
  },
  'nie-number-cost': {
    en: '/nie-number-cost',
    de: '/nie-nummer-kosten',
    da: '/nie-nummer-pris',
    sv: '/nie-nummer-pris',
    nl: '/kosten-nie-nummer',
    no: '/nie-nummer-pris',
  },
  'nie-number-documents': {
    en: '/nie-number-documents',
    de: '/nie-nummer-dokumente',
    da: '/nie-nummer-dokumenter',
    sv: '/nie-nummer-dokument',
    nl: '/nie-nummer-documenten',
    no: '/nie-nummer-dokumenter',
  },
  'nie-without-travelling': {
    en: '/nie-number-without-travelling-to-spain',
    de: '/nie-nummer-ohne-nach-spanien-zu-reisen',
    da: '/nie-nummer-uden-at-rejse-til-spanien',
    sv: '/nie-nummer-utan-att-resa-till-spanien',
    nl: '/nie-nummer-zonder-naar-spanje-te-reizen',
    no: '/nie-nummer-uten-a-reise-til-spania',
  },
  'nie-from-abroad': {
    en: '/get-nie-from-abroad',
    de: '/nie-nummer-aus-dem-ausland',
    da: '/faa-nie-nummer-fra-udlandet',
    sv: '/fa-nie-nummer-fran-utlandet',
    nl: '/nie-nummer-aanvragen-vanuit-het-buitenland',
    no: '/fa-nie-nummer-fra-utlandet',
  },
  'nie-processing-time': {
    en: '/nie-number-processing-time',
    de: '/nie-nummer-bearbeitungszeit',
    da: '/nie-nummer-behandlingstid',
    sv: '/nie-nummer-handlaggningstid',
    nl: '/nie-nummer-verwerkingstijd',
    no: '/nie-nummer-behandlingstid',
  },
  'nie-appointment': {
    en: '/nie-appointment-spain',
    de: '/nie-termin-spanien',
    da: '/nie-tid-spanien',
    sv: '/nie-tid-spanien',
    nl: '/nie-afspraak-spanje',
    no: '/nie-time-spania',
  },
} as const

export type ArticleRouteKey = keyof typeof articleSlugs
export type ArticleLocale = keyof (typeof articleSlugs)[ArticleRouteKey]
