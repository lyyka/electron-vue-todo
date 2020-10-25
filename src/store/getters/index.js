function getToDos(state){
    return state.todos
}

function getBaseAPIUrl(state){
    return state.baseAPIUrl
}

function getTodo(state){
    return state.todo
}

function isAuth(state){
    return state.auth_token !== undefined
}

function authHeaders(state){
    const token = state.auth_token
    if(token !== undefined){
        return {
            Authorization: `Bearer ${token}`
        }
    }
    else{ 
        return {}
    }
}

export default {
    getToDos,
    getBaseAPIUrl,
    getTodo,
    isAuth,
    authHeaders,
}