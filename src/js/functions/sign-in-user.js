import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase.js'
import { emailInput } from '../components/inputs/email-input.js'
import { passwordInput } from '../components/inputs/password-input.js'

export const signInUser = () => {
    const emailValue = document.querySelector('.email-input').value
    const passwordValue = document.querySelector('.password-input').value

    if (emailInput.validity.valid && passwordInput.validity.valid) {
        signInWithEmailAndPassword(auth(), emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    }

    if (!emailInput.validity.valid) {
        emailInput.classList.add('shake')

        const emailAnimationEndHandler = () => {
            emailInput.classList.remove('shake')
            emailInput.removeEventListener('animationend', emailAnimationEndHandler)
        }

        emailInput.addEventListener('animationend', emailAnimationEndHandler)
    }

    if (!passwordInput.validity.valid) {
        passwordInput.classList.add('shake')

        const passwordAnimationEndHandler = () => {
            passwordInput.classList.remove('shake')
            passwordInput.removeEventListener('animationend', passwordAnimationEndHandler)
        }

        passwordInput.addEventListener('animationend', passwordAnimationEndHandler)
    }
}
