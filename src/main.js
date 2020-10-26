import Vue from 'vue'
import VCalendar from 'v-calendar'
import UniqueId from 'vue-unique-id';
// import {Swatches} from 'vue-color'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import 'bootstrap/dist/css/bootstrap.min.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('ficon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VCalendar, {
    componentPrefix: 'vc',
    locales: {
        'sr': {
            firstDayOfWeek: 2,
            masks: {
                L: "DD/MM/YYYY",
            }
        },
        'en': {
            firstDayOfWeek: 1,
            masks: {
                L: "MM/DD/YYYY",
            }
        }
    }
})


Vue.use(UniqueId);

new Vue({
    // components: {
        // 'swatches-picker': Swatches,
    // },
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
