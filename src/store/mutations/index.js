function updateTodos(state, todos){
    todos.forEach(todo => {
        if(todo.due_date){
            todo.due_date = new Date(todo.due_date)
        }
        state.todos.unshift(todo)
    })
}

function updateSpecificTodo(state, todo){
    let updated = false
    for(let i = 0; i < state.todos.length && !updated; i++){
        if(state.todos[i]._id == todo._id){
            state.todos.splice(i, 1, todo)
            updated = true
        }
    }
}

function resetCurrentTodo(state){
    state.todo = {
        body: "",
        due_date: undefined,
    }
}

function setAuthToken(state, token){
    state.auth_token = token
}

function logOut(state){
    state.auth_token = undefined
    state.todos = []
    state.todo = {
        body: "",
        due_date: undefined,
    }
}

export default {
    updateTodos,
    updateSpecificTodo,
    resetCurrentTodo,
    setAuthToken,
    logOut,
}