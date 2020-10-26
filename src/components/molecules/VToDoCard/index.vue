<script>
    import VCheckBox from '@/components/atoms/VCheckbox'
    import { mapGetters, mapActions } from 'vuex'

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
                todoObject: this.todo,
            }
        },

        computed: {
            ...mapGetters(["getBaseAPIUrl"]),
        },

        methods: {
            ...mapActions(['updateTodo']),
            async onChecked(e){
                this.updateTodo(this.todoObject)
                e.stopPropagation()
            },
            handleClick(){
                this.$emit('click')
            }
        },
    }
</script>
<template>
    <div @click="handleClick" class="todo-card border-bottom py-2 px-3 d-flex justify-content-between align-items-center">
        <VCheckBox
            v-model="todoObject.completed" 
            @input='onChecked' 
            :completedLabel="todoObject.completed" 
            :checked="todoObject.completed" 
            :label="todo.body" 
        />
        
        <p class="mb-0">
            <span v-if="todo.due_date && !todo.completed">
                {{ todo.due_date.toLocaleDateString(this.$i18n.locale) }}
            </span>
            <span v-else-if="!todo.completed">
                -
            </span>
        </p>
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