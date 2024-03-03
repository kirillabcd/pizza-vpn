import { readUserData } from '../../functions/read-firestore-db-data'

export const keyItem = document.createElement('div')
keyItem.textContent = 'Active key'
keyItem.className = 'key-item profile-item'

keyItem.addEventListener('click', async () => {
    const user = await readUserData()
    const key = await user.keyValue

    navigator.clipboard
        .writeText(key)
        .then(() => {})
        .catch((error) => {})
})
