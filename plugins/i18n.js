export default function({ app, store }) {
  // // beforeLanguageSwitch called right before setting a new locale
  // app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
  //     console.log(oldLocale, newLocale)
  // }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = (newLocale) => {
      // It's backwards just because
      if (newLocale === 'en') {
          store.commit('lang/changeFilter')
      } else {
          store.commit('lang/setBack')
      }   
  }
}