import Vue from 'vue'
import UniqueId from 'vue-unique-id';
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './packages/i18n'
import fontawesome from './packages/fontawesome'
import calendar from './packages/calendar'
import 'bootstrap/dist/css/bootstrap.min.css'

fontawesome.loadIcons()
Vue.config.productionTip = false
calendar.loadCalendar()
Vue.use(UniqueId)

new Vue({
    // components: {
        // 'swatches-picker': Swatches,
    // },
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
