import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { languages } from './shared/application/language'
import { I18nConfig } from './types/i18n'

const locales = languages.map(({ locale }) => locale)

export const i18nConfig: I18nConfig = {
  locales,
  defaultLocale: 'pt-BR',
  localeDetection: true
}

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
