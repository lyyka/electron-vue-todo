<script>
    import axios from 'axios'
    import VCheckBox from '../../atoms/VCheckbox'
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        components: {VCheckBox},
        props: {
            todo: {
                type: Object,
                required: true,
            },
        },

        data() {
            return {
                todoObject: {...this.todo},
            }
        },

        computed: {
            ...mapGetters(["getBaseAPIUrl"]),
        },

        methods: {
            ...mapMutations(['updateSpecificTodo']),
            async onChecked(){
                try{
                    const { data } = await axios.put(`${this.getBaseAPIUrl}/api/todos/update`, this.todoObject)
                    if(data.success){
                        this.updateSpecificTodo(this.todoObject)
                    }
                } catch(e) { 
                    console.error(e)
                }
            }
        },
    }
</script>
<template>
    <div class="todo-card border-bottom py-2 px-3 d-flex justify-content-between align-items-center">
        <div>
            <VCheckBox v-model="todoObject.completed" @input='onChecked' :completedLabel="todoObject.completed" :checked="todoObject.completed" :label="todo.body" />
        </div>
        <p v-if="todo.due_date && !todo.completed" class="mb-0">{{ todo.due_date.toLocaleDateString(this.$i18n.locale) }}</p>
    </div>
</template>
<style lang="scss" scoped>
    .todo-card{
        transition: all 0.3s ease-in-out;
        background-color: white;
        &:hover{
            cursor: pointer;
            background-color: rgba(255, 150, 66, 0.15);
        }
    }
</style>