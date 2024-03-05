import { getUser } from '../../functions/get-user'

export const uidItem = () => {
    const user = getUser()
    const userId = user.uid

    const uid = document.createElement('div')
    uid.className = 'uid-item profile-item'

    const uidTitle = document.createElement('div')
    uidTitle.className = 'profile-item-title'
    uidTitle.textContent = 'User ID'

    const uidContent = document.createElement('div')
    uidContent.className = 'profile-item-content'
    uidContent.textContent = userId

    uid.append(uidTitle, uidContent)

    uid.addEventListener('click', () => {
        navigator.clipboard
            .writeText(userId)
            .then(() => {})
            .catch((error) => {})
    })

    return uid
}
