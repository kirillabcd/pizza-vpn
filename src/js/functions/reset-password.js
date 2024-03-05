import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase'
import { emailInput } from '../components/inputs/email-input'
import { directRouter } from './vanilla-router'

export const resetPassword = () => {
    const email = emailInput.value

    if (!emailInput.validity.valid) {
        emailInput.classList.add('shake')

        const emailAnimationEndHandler = () => {
            emailInput.classList.remove('shake')
            emailInput.removeEventListener('animationend', emailAnimationEndHandler)
        }

        emailInput.addEventListener('animationend', emailAnimationEndHandler)
    }

    if (emailInput.validity.valid) {
        sendPasswordResetEmail(auth(), email)
            .then(() => {
                directRouter('sign-in')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}
