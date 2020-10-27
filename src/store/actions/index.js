import axios from 'axios'
import  i18n from '@/packages/i18n'

async function handleRequestErrors(context, e){
    const response = e.response
    if(response.status === 403) {
        // Token expired
        context.commit("logOut")
    }
    alert(i18n.t('errors.default'))
}

async function fetchNewTodos(context){
    try{
        const {data} = await axios.get(`${context.getters.getBaseAPIUrl}/api/todos`, {
            headers: {
                ...context.getters.authHeaders,
            }
        })
        context.commit("updateTodos", data)
    } catch(e){
        context.dispatch('handleRequestErrors', e)
    }
}

async function storeNewTodo(context, todo){
    try{
        const {data} = await axios.post(
            `${context.getters.getBaseAPIUrl}/api/todos`, 
            todo,
            {
                headers: {
                    ...context.getters.authHeaders,
                }
            }
        )
        if(data.success){
            context.commit("updateTodos", [{...data.todo}])
            context.commit("resetCurrentTodo")
        }
    }
    catch(e){
        context.dispatch('handleRequestErrors', e)
    }
}

async function updateTodo(context, todo){
    try{
        await axios.put(`${context.getters.getBaseAPIUrl}/api/todos/update`, todo, {
            headers: {
                ...context.getters.authHeaders,
            }
        })
        context.commit("updateSpecificTodo", todo)
    }
    catch(e){
        context.dispatch('handleRequestErrors', e)
    }
}

export default {
    handleRequestErrors,
    fetchNewTodos,
    storeNewTodo,
    updateTodo,
}