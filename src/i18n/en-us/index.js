import validation from './validation'

export default {
    // Validation errors
    ...validation,

    // Todos page
    title: "ToDo List",
    noToDos: "No todos found",
    inputPlaceholder: "Enter a todo...",
    dueDatePlaceholder: "Due date...",
    completedTitle: "Completed",

    // Register
    registerTitle: 'Register',
    registerBtn: 'Create account',
    alreadyHaveAccount: 'Already have an account?',

    // Log in page
    loginTitle: 'Log in',
    loginTitleTwo: 'Success! Now, you just need to log in :)',
    loginButton: 'Log In',
    noAccountYet: 'No account yet?',

    // Fields
    fields: {
        name: 'Name',
        email: 'Email',
        password: 'Password',
    },

    // Errors
    errors: {
        default: 'An unexpected error occurred'
    }
}