import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './src/locales/en.json';
import fr from './src/locales/fr.json';

i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    fr: {translation: fr},
  },
  lng: 'en',
  fallbacking: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
