import { auth } from '../firebase/auth-firebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { db } from '../firebase/firestore.js'
import { doc, setDoc } from 'firebase/firestore'
import { emailInput, emailInputError } from '../components/email-input.js'
import { passwordInput, passwordInputError } from '../components/password-input.js'

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
        createUserWithEmailAndPassword(auth(), emailValue, passwordValue)
            .then((userCredential) => {
                const user = userCredential.user
                console.log(user)
                createNewUserDb()
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
            })
    } else {
        console.log('not valid')
    }
}
