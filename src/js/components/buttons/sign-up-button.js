import { createNewUser } from '../../functions/create-new-user.js'

export const signUpButton = document.createElement('button')
signUpButton.className = 'sign-up-button button-primary'
signUpButton.textContent = 'Отправить'

signUpButton.addEventListener('click', (event) => {
    event.preventDefault()
    createNewUser()
})
