import { auth } from '../firebase/auth-firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { directRouter } from './vanilla-router'

export const handleAuthStatus = () => {
    onAuthStateChanged(auth(), (user) => {
        if (user) {
            directRouter('profile')
            console.log(user)
        } else {
            directRouter('welcome')
        }
    })
}
