function getToDos(state){
    return state.todos
}

function getBaseAPIUrl(state){
    return state.baseAPIUrl
}

function getTodo(state){
    return state.todo
}

function authHeaders(){
    const user = localStorage.getItem('user')
    if(user){
        return {
            Authorization: `Bearer ${user.token}`
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
    authHeaders,
}