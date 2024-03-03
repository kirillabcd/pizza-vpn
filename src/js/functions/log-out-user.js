import { signOut } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase'

export const logOutUser = () => {
    signOut(auth()).then(() => {
        console.log('logged out')
    })
}
