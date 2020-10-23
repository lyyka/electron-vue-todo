<script>
    import VToDoCard from "@/components/molecules/VToDoCard"

    import { mapGetters, mapMutations } from "vuex"
    import axios from 'axios'

    export default {
        components: {VToDoCard},
        
        computed: {
            ...mapGetters(["getToDos", "getBaseAPIUrl"]),
            completed() {
                return this.getToDos.filter(e => e.completed)
            },
            incomplete() {
                return this.getToDos.filter(e => !e.completed)
            },
        },

        mounted() {
            this.fetchTodos()
        },
        
        methods: {
            ...mapMutations(["updateTodos"]),
            async fetchTodos() {
                try{
                    const {data} = await axios.get(`${this.getBaseAPIUrl}/api/todos`)
                    this.updateTodos(data)
                } catch(e){
                    console.error(e)
                }
            },
        }
    }
</script>
<template>
    <div class="border-top">
        <VToDoCard 
            v-for="todo in incomplete" 
            :key="todo._id"
            :todo="todo"
        />
        <h5 v-if="completed.length > 0" class="mb-3 px-3 mt-5">{{ this.$t('completedTitle') }}</h5>
        <VToDoCard 
            v-for="todo in completed" 
            :key="todo._id"
            :todo="todo"
        />
        <h5 v-if="getToDos.length == 0" class="text-center text-muted mt-5">
            {{ this.$t("noToDos") }}
        </h5>
    </div>
</template>