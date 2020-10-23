<script>
    import { mapGetters, mapMutations } from "vuex"
    // import {Swatches} from 'vue-color'
    import axios from 'axios'
    import VInput from '../../atoms/VInput'

    export default {
        components: {VInput},
        data() {
            return {
                todo: {
                    body: "",
                    due_date: undefined,
                    color: "#333",
                },
            };
        },

        computed: {
            ...mapGetters(["getBaseAPIUrl"]),
        },

        methods: {
            ...mapMutations(["updateTodos"]),
            async submitForm(e) {
                try{
                    const {data} = await axios.post(`${this.getBaseAPIUrl}/api/todos`, this.todo)
                    if(data.success){
                        this.updateTodos([{...this.todo}])
                        this.resetForm()
                    }
                }
                catch(e){
                    console.error(e)
                }

                e.preventDefault()
            },

            resetForm(){
                this.todo.body = ""
                this.todo.due_date = undefined
            }
        },
    };
</script>
<template>
    <form method="POST" @submit.prevent="submitForm">
        <div class="d-flex justify-content-between align-items-center">
            <VInput
                class='mr-3'
                v-model="todo.body"
                :placeholder="this.$t('inputPlaceholder')"
            />
            <vc-date-picker
                mode="date" 
                v-model="todo.due_date" 
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