import { signInUser } from '../../functions/sign-in-user.js'

export const signInButton = document.createElement('button')
signInButton.className = 'sign-in-button button-primary'
signInButton.textContent = 'Войти'

signInButton.addEventListener('click', (event) => {
    event.preventDefault()
    signInUser()
})
