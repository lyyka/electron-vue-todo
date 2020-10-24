function getToDos(state){
    return state.todos
}

function getBaseAPIUrl(state){
    return state.baseAPIUrl
}

function getTodo(state){
    return state.todo
}

export default {
    getToDos,
    getBaseAPIUrl,
    getTodo,
}