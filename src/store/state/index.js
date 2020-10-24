export default {
    baseAPIUrl: process.env.NODE_ENV === 'production' ? 
        'https://todo2-server.herokuapp.com' : 
        'http://localhost:8000',
    
    todos: [],
    todo: {
        body: "",
        due_date: undefined,
    }
}