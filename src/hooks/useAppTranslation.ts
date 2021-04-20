import { useTranslation } from 'react-i18next'
import translation, { Language } from 'src/app/translation'
import { Callback, TFunction } from 'i18next'

type TranslationNamespace = keyof typeof translation
type ChangeLanguageFn = (
  language: Language,
  callback?: Callback,
) => Promise<TFunction>

/**
 * @description Оборачивает useTranslation в кастомный хук для того, чтобы описать типы данных.
 *  ВАЖНО использовать именно этот хук, вместо нативного useTranslation.
 */
const useAppTranslation = () => {
  const { t, i18n } = useTranslation()

  return {
    t: t as (key: TranslationNamespace) => string,
    i18n: {
      ...i18n,
      changeLanguage: i18n.changeLanguage as ChangeLanguageFn,
    },
  }
}

export default useAppTranslation
