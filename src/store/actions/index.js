import axios from 'axios'

async function fetchNewTodos(context){
    try{
        const {data} = await axios.get(`${context.getters.getBaseAPIUrl}/api/todos`)
        context.commit("updateTodos", data)
    } catch(e){
        console.error(e)
    }
}

async function storeNewTodo(context, todo){
    try{
        const {data} = await axios.post(`${context.getters.getBaseAPIUrl}/api/todos`, todo)
        if(data.success){
            context.commit("updateTodos", [{...todo}])
            context.commit("resetCurrentTodo")
        }
    }
    catch(e){
        console.error(e)
    }
}

async function updateTodo(context, todo){
    try{
        await axios.put(`${context.getters.getBaseAPIUrl}/api/todos/update`, todo)
        context.commit("updateSpecificTodo", todo)
    }
    catch(e){
        console.error(e)
    }
}

export default {
    fetchNewTodos,
    storeNewTodo,
    updateTodo,
}