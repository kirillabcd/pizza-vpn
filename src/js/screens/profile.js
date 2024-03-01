import { getUser } from '../functions/get-user'
import { signOutUser } from '../functions/sign-out-user'
import { directRouter } from '../functions/vanilla-router'

export const userProfile = () => {
    const profileSection = document.createElement('section')
    profileSection.className = 'profile'

    const email = document.createElement('h2')
    email.textContent = getUser().email

    // temp
    email.addEventListener('click', () => {
        signOutUser()
        directRouter('welcome')
    })

    profileSection.append(email)

    return profileSection
}
