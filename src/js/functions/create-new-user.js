import { auth } from '../firebase/auth-firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebase/firestore.js'
import { doc, setDoc } from 'firebase/firestore'
import { emailInput } from '../components/inputs/email-input.js'
import { passwordInput } from '../components/inputs/password-input.js'

const createNewUserDb = async () => {
    const user = auth().currentUser
    const userID = user.uid

    try {
        await setDoc(doc(db, 'users', userID), {
            uid: user.uid,
            email: user.email,
            subscriber: false,
        })
        console.log('Document written with ID: ', userID)
    } catch (e) {
        console.error('Error adding document: ', e)
    }
}

export const createNewUser = () => {
    const emailValue = document.querySelector('.email-input').value
    const passwordValue = document.querySelector('.password-input').value

    if (emailInput.validity.valid && passwordInput.validity.valid) {
        createUserWithEmailAndPassword(auth(), emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user
                createNewUserDb()
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
