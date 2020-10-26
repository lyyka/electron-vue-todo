import axios from 'axios'

async function fetchNewTodos(context){
    try{
        const {data} = await axios.get(`${context.getters.getBaseAPIUrl}/api/todos`, {
            headers: {
                ...context.getters.authHeaders,
            }
        })
        context.commit("updateTodos", data)
    } catch(e){
        console.error(e)
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
            context.commit("updateTodos", [{...todo}])
            context.commit("resetCurrentTodo")
        }
    }
    catch(e){
        console.error(e.response.data.errors)
    }
}

async function updateTodo(context, todo){
    try{
        console.log(todo)
        await axios.put(`${context.getters.getBaseAPIUrl}/api/todos/update`, todo, {
            headers: {
                ...context.getters.authHeaders,
            }
        })
        context.commit("updateSpecificTodo", todo)
    }
    catch(e){
        console.error(e.response.data)
    }
}

export default {
    fetchNewTodos,
    storeNewTodo,
    updateTodo,
}