import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase.js'
import { emailInput, emailInputError } from '../components/email-input.js'
import { passwordInput, passwordInputError } from '../components/password-input.js'

export const signInUser = () => {
    const emailValue = document.querySelector('.email-input').value
    const passwordValue = document.querySelector('.password-input').value

    if (!emailInput.validity.valid) {
        emailInputError.style.visibility = 'visible'
    } else {
        emailInputError.style.visibility = 'hidden'
    }

    if (!passwordInput.validity.valid) {
        passwordInputError.style.visibility = 'visible'
    } else {
        passwordInputError.style.visibility = 'hidden'
    }

    if (emailInput.validity.valid && passwordInput.validity.valid) {
        signInWithEmailAndPassword(auth(), emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    } else {
        console.log('not valid')
    }
}
