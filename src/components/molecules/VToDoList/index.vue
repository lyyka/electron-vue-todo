<script>
    import VToDoCard from "@/components/molecules/VToDoCard"

    import { mapGetters, mapActions } from "vuex"

    export default {
        components: {VToDoCard},
        
        computed: {
            ...mapGetters(["getToDos"]),
            completed() {
                return this.getToDos.filter(e => e.completed)
            },
            incomplete() {
                return this.getToDos.filter(e => !e.completed)
            },
        },

        mounted() {
            this.fetchNewTodos()
        },
        
        methods: {
            ...mapActions(["fetchNewTodos"]),
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