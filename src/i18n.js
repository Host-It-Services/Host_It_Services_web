import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: enTranslations },
            fr: { translation: frTranslations },
        },
        lng: 'en', // Set default language to English
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // React already safes from xss
        },
    });

export default i18n;

