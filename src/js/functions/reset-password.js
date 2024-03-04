import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase'
import { emailInput } from '../components/inputs/email-input'

export const resetPassword = () => {
    const email = emailInput.value
    if (emailInput.validity.valid) {
        sendPasswordResetEmail(auth(), email)
            .then(() => {
                console.log('sended')
            })
            .catch((error) => {
                console.log(error.message)
            })
    }
}
