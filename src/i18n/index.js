import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './messages'

const locale = 'sr-Latn'

Vue.use(VueI18n)

export default new VueI18n({
    locale: locale, // set locale
    messages, // set locale messages
});