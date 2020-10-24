<script>
    import { mapGetters, mapActions } from "vuex"
    import VInput from '@/components/atoms/VInput'

    export default {
        components: {VInput},

        computed: {
            ...mapGetters(["getTodo"]),
        },

        methods: {
            ...mapActions(["storeNewTodo"]),
            async submitForm(e) {
                this.storeNewTodo(this.getTodo)
                e.preventDefault()
            },
        },
    };
</script>
<template>
    <form method="POST" @submit.prevent="submitForm">
        <div class="d-flex justify-content-between align-items-center">
            <VInput
                class='mr-3'
                v-model="getTodo.body"
                :placeholder="this.$t('inputPlaceholder')"
            />
            <vc-date-picker
                mode="date" 
                v-model="getTodo.due_date" 
                :popover="{placement: 'auto-start'}"
                :locale="this.$i18n.locale"
                :min-date="new Date()"
                color="orange">
                <template v-slot="{ inputValue, inputEvents }">
                    <input
                    class="d-block w-100 mr-3"
                    :value="inputValue"
                    :placeholder="$t('dueDatePlaceholder')"
                    v-on="inputEvents"
                    />
                </template>
            </vc-date-picker>
        </div>
        <button class="d-none" type="submit">Test</button>
    </form>
</template>