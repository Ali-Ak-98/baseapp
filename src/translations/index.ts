import { customLanguageMap } from '../custom/translations';
import { en as enCustom } from '../custom/translations/en';
import { fa } from '../custom/translations/fa';
import { en } from './en';

export type LangType = typeof en;

export const languageMap = {
    default: fa,
    en: { ...en, ...enCustom },
    ...customLanguageMap,
};
