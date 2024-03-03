// ----> COMPONENTS
import { logOutItem } from '../components/profile-items/log-out-item'
import { uidItem } from '../components/profile-items/user-id-item'
import { keyItem } from '../components/profile-items/active-key-item'
import { unsubscribeUserItem } from '../components/profile-items/unsubscribe-item'
import { subscribeItem } from '../components/profile-items/subscribe-item'
import { getOutlineItem } from '../components/profile-items/get-outline-client-item'

// ----> FUNCTIONS
import { getUser } from '../functions/get-user'
import { readUserData } from '../functions/read-firestore-db-data'

export const userProfile = async () => {
    const user = getUser()
    const userData = await readUserData()

    const profileSection = document.createElement('section')
    profileSection.className = 'section'

    const profileContainer = document.createElement('div')
    profileContainer.className = 'profile-container'

    // ----> USER INFO (userpic, email)

    const userInfoContainer = document.createElement('div')
    userInfoContainer.className = 'user-info-container'

    const userPic = document.createElement('div')
    userPic.className = 'user-pic'

    const email = document.createElement('h2')
    email.textContent = user.email
    email.className = 'user-email'

    userInfoContainer.append(userPic, email)

    // ---->PROFILE ITEMS (subscribe, uid, log out etc)

    const profileItemsContainer = document.createElement('div')
    profileItemsContainer.className = 'profile-items-container'

    const newLogOutItem = logOutItem
    const newUidItem = uidItem
    const newKeyItem = keyItem
    const newUnsubscribeUserItem = unsubscribeUserItem
    const newSubscribeItem = subscribeItem
    const newGetOutlineItem = getOutlineItem

    if (userData.subscriber === true) {
        profileItemsContainer.append(
            newUidItem,
            newKeyItem,
            newGetOutlineItem,
            newLogOutItem,
            newUnsubscribeUserItem
        )
    } else if (userData.subscriber === false) {
        profileItemsContainer.append(newUidItem, newSubscribeItem, newGetOutlineItem, newLogOutItem)
    }

    profileContainer.append(userInfoContainer, profileItemsContainer)
    profileSection.append(profileContainer)

    return profileSection
}
