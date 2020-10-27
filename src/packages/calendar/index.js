import VCalendar from 'v-calendar'
import Vue from 'vue'

export default {
    loadCalendar: () => {
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
    }
}