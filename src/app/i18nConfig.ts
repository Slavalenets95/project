import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translation, { Language } from './translation'

const getLanguageResources = (language: Language) => {
  return Object.fromEntries(
    Object.entries(translation).map(([key, t]) => [key, t[language]]),
  )
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: Language.Ru,
    preload: [Language.Ru, Language.En],
    ns: ['translations'],
    defaultNS: 'translations',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ru: {
        translations: getLanguageResources(Language.Ru),
      },
      en: {
        translations: getLanguageResources(Language.En),
      },
    },
  })

export default i18n
