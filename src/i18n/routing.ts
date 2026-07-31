import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['da', 'en', 'no', 'sv', 'de', 'nl'],
  defaultLocale: 'da',
  localePrefix: 'as-needed',
  localeDetection: false,
})
