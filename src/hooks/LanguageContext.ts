import React, { createContext } from 'react'
import { allLanguages, EN ,ZHCN} from '../constants/localisation/languageCodes'

export interface LanguageObject {
  code: string
  language: string
}
interface LanguageState {
  selectedLanguage: LanguageObject
  setSelectedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
  translatedLanguage: LanguageObject
  setTranslatedLanguage: React.Dispatch<React.SetStateAction<LanguageObject>>
}

// const defaultLanguageState: LanguageState = {
//   selectedLanguage: { code: '', language: '' },
//   setSelectedLanguage: (): void => undefined,
//   translatedLanguage: { code: '', language: '' },
//   setTranslatedLanguage: (): void => undefined,
// }

export const LanguageContext = React.createContext({
  selectedLanguage: ZHCN,
  setSelectedLanguage: () => undefined,
  translatedLanguage: ZHCN,
  setTranslatedLanguage: () => undefined,
} as LanguageState)

// export const LanguageContext = createContext(defaultLanguageState as LanguageState)
