import { getUser } from '../functions/get-user'
import { signOutUser } from '../functions/sign-out-user'
import { directRouter } from '../functions/vanilla-router'
import { readUserData } from '../firebase/read-firestore-db-data'

export const userProfile = async () => {
    const user = getUser()
    const data = await readUserData()

    const profileSection = document.createElement('section')
    profileSection.className = 'profile'

    const email = document.createElement('h2')
    email.textContent = user.email
    email.className = 'title'

    const id = document.createElement('h2')
    id.textContent = user.uid
    id.className = 'title'

    // temp
    email.addEventListener('click', () => {
        signOutUser()
        directRouter('welcome')
    })

    profileSection.append(email, id)

    if ((data.subscriber = 'false')) {
        const subscriber = document.createElement('h2')
        subscriber.textContent = 'You are not subscribed yet'
        subscriber.className = 'title'

        profileSection.append(subscriber)
    }

    return profileSection
}
