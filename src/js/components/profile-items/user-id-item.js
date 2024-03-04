import { getUser } from '../../functions/get-user'

export const uidItem = document.createElement('div')
uidItem.textContent = 'User ID'
uidItem.className = 'uid-item profile-item'

uidItem.addEventListener('click', () => {
    const user = getUser()
    const userId = user.uid

    navigator.clipboard
        .writeText(userId)
        .then(() => {})
        .catch((error) => {})
})
