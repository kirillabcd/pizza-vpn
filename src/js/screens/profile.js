import { getUser } from '../functions/get-user'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/auth-firebase'

export const userProfile = () => {
    const profileSection = document.createElement('section')
    profileSection.className = 'profile'

    const email = document.createElement('h2')
    email.textContent = getUser().email

    // temp
    email.addEventListener('click', () => {
        signOut(auth()).then(() => {
            console.log('logged out')
        })
    })

    profileSection.append(email)

    return profileSection
}
