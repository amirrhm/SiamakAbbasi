import VueI18n from 'vue-i18n';
window.i18n = new VueI18n({
  locale: 'fa',
  fallbackLocale: 'en',
});
Vue.config.lang = 'fa';
Vue.config.fallbackLang = 'en';
i18n.setLocaleMessage('fa', require('./lang/fa.json'));
i18n.setLocaleMessage('en', require('./lang/en.json'));