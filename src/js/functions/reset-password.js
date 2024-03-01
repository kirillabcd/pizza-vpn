import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase'
import { emailInput, emailInputError } from '../components/inputs/email-input'

export const resetPassword = () => {
    const email = emailInput.value
    if (emailInput.validity.valid) {
        emailInputError.style.visibility = 'hidden'
        sendPasswordResetEmail(auth(), email)
            .then(() => {
                console.log('sended')
            })
            .catch((error) => {
                console.log(error.message)
            })
    } else {
        emailInputError.style.visibility = 'visible'
    }
}
