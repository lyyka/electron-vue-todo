<script>
    import VToDoCard from "@/components/molecules/VToDoCard"
    import VToDoView from "@/components/organisms/VToDoView"

    import { mapGetters, mapActions } from "vuex"

    export default {
        components: {VToDoCard, VToDoView},
        
        computed: {
            ...mapGetters(["getToDos"]),
            completed() {
                return this.getToDos.filter(e => e.completed)
            },
            incomplete() {
                return this.getToDos.filter(e => !e.completed)
            },
        },

        data(){
            return {
                activeTodo: undefined,
            }
        },

        mounted() {
            this.fetchNewTodos()
        },
        
        methods: {
            ...mapActions(["fetchNewTodos"]),
            openTodoView(todo){
                if(this.activeTodo && this.activeTodo._id === todo._id){
                    this.activeTodo = undefined
                }
                else{
                    this.activeTodo = todo
                }
            },
        }
    }
</script>
<template>
    <div class="d-flex flex-row w-100">
        <div class="border-top" id="list-col">
            <VToDoCard 
                v-for="todo in incomplete" 
                :key="todo._id"
                :todo="todo"
                @click="openTodoView(todo)"
            />
            <h5 v-if="completed.length > 0" class="mb-3 px-3 mt-5">{{ this.$t('completedTitle') }}</h5>
            <VToDoCard 
                v-for="todo in completed" 
                :key="todo._id"
                :todo="todo"
                @click="openTodoView(todo)"
            />
            <h5 v-if="getToDos.length == 0" class="text-center text-muted mt-5">
                {{ this.$t("noToDos") }}
            </h5>
        </div>
        <div v-if="activeTodo" class="border-left border-top border-bottom" id="view-col">
            <VToDoView 
                :todo="activeTodo"
            />
        </div>
    </div>
</template>
<style lang="scss" scoped>
    #list-col{
        flex-basis: 70%;
        flex-grow: 1;
    }
    #view-col{
        flex-basis: 30%;
    }
</style>