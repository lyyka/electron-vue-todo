import validation from './validation'

export default {
    ...validation,
    title: "Lista zadataka",
    noToDos: "Ni jedan zadatak nije pronađen",
    inputPlaceholder: "Unesi zadatak...",
    dueDatePlaceholder: "Krajnji datum...",
    completedTitle: 'Završeni',

    registerTitle: 'Registruj se',
    registerBtn: 'Napravi nalog',
    alreadyHaveAccount: 'Imaš nalog?',

    loginTitle: 'Uloguj se',
    loginTitleTwo: 'Registracija uspešna, ostalo je još samo da se uloguješ :)',
    loginButton: 'Uloguj se',
    noAccountYet: 'Nemaš nalog?',

    fields: {
        name: 'Ime',
        email: 'Email',
        password: 'Šifra',
    }
}