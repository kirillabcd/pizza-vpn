import { createNewUser } from '../../functions/create-new-user.js'

export const signUpButton = document.createElement('button')
signUpButton.className = 'sign-up-button button-primary'
signUpButton.textContent = 'Sign up'

signUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    createNewUser()
})
