import validation from './validation'

export default {
    // Validation errors
    ...validation,

    // Todos page
    title: "Lista zadataka",
    noToDos: "Ni jedan zadatak nije pronađen",
    inputPlaceholder: "Unesi zadatak...",
    dueDatePlaceholder: "Krajnji datum...",
    completedTitle: 'Završeni',

    // Todo View
    todoCompletedMark: 'Završen',
    descriptionInputPlaceholder: 'Unesite opis...',

    // Register page
    registerTitle: 'Registruj se',
    registerBtn: 'Napravi nalog',
    alreadyHaveAccount: 'Imaš nalog?',

    // Log in page
    loginTitle: 'Uloguj se',
    loginTitleTwo: 'Registracija uspešna, ostalo je još samo da se uloguješ :)',
    loginButton: 'Uloguj se',
    noAccountYet: 'Nemaš nalog?',

    // Fields
    fields: {
        name: 'Ime',
        email: 'Email',
        password: 'Šifra',
    },

    // Errors
    errors: {
        default: 'Došlo je do neočekivane greške'
    }
}