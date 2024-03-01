// ----> COMPONENTS
import { uidButton } from '../components/buttons/uid-copy-button'
import { logOutButton } from '../components/buttons/log-out-button'
import { subscribeButton } from '../components/buttons/subscribe-button'

// ----> FUNCTIONS
import { getUser } from '../functions/get-user'
import { readUserData } from '../firebase/read-firestore-db-data'

export const userProfile = async () => {
    const user = getUser()
    const data = await readUserData()

    const profileSection = document.createElement('section')
    profileSection.className = 'section'

    const email = document.createElement('h2')
    email.textContent = `Welcome, ${user.email}`
    email.className = 'user-email'

    const newUidButton = uidButton
    const newLogOutButton = logOutButton

    profileSection.append(email, newUidButton, newLogOutButton)

    if ((data.subscriber = 'false')) {
        const newSubscribeButton = subscribeButton

        profileSection.append(newSubscribeButton)
    }

    return profileSection
}
