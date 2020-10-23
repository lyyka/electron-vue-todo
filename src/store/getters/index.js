function getToDos(state){
    return state.todos
}

function getBaseAPIUrl(state){
    return state.baseAPIUrl
}

export default {
    getToDos,
    getBaseAPIUrl,
}