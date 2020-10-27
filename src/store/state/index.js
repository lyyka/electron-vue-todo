export default {
    baseAPIUrl: process.env.NODE_ENV === 'production' ? 
        'https://todo2-server.herokuapp.com' : 
        'http://localhost:8000',
    
    auth_token: undefined,
    todos: [],
    todo: {
        body: "",
        content: "",
        due_date: undefined,
    }
}