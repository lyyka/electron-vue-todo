const beforeEnter = (to, from, next) => {
    const token = localStorage.getItem('user-token')
    const hide_for_auth = ['/login', '/register']
    if(token){
        if(hide_for_auth.includes(to.path)){
            next('/')
        }
        else{
            next()
        }
    }
    else{
        if(!hide_for_auth.includes(to.path)){
            next('login')
        }
        else{
            next()
        }
    }
}

export default [
    {
        path: '/',
        name: 'Todos',
        component: () => import(/* webpackChunkName: "home" */ '../views/Todos.vue'),
        beforeEnter,
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "home" */ '../views/LogIn.vue'),
        beforeEnter,
    },
    {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "home" */ '../views/Register.vue'),
        beforeEnter,
    }
]