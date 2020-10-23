<script>
import { mapGetters } from 'vuex'
export default {
    data () {
        return {
            locales: ['sr-Latn', 'en-US'],
            locale_strings: ['Srpski (Lat.)', 'English (US)'],
            selected_locale: "",
        }
    },

    mounted() {
        this.selected_locale = this.$i18n.locale
    },

    methods: {
        ...mapGetters(['getLocale']),
        changeLocale(){
            this.$i18n.locale = this.selected_locale
        }
    }
}
</script>
<template>
    <nav class="px-3 pt-2 text-right">
        <select name="locale" v-model="selected_locale" @change="changeLocale">
            <option 
            v-for="(locale, i) in locales" 
            :key="i"
            :value="locale">
                {{ locale_strings[i] }}
            </option>
        </select>
    </nav>
</template>
<style lang="scss" scoped>
    .locale-item{
        border-right: 1px solid #e6e6e6;
        &:last-of-type{
            border-right: 0;
        }
    }
</style>