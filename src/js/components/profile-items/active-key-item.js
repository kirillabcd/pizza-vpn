import { readUserData } from '../../functions/read-firestore-db-data'

// export const keyItem = document.createElement('div')
// keyItem.textContent = 'Active key'
// keyItem.className = 'key-item profile-item'

// keyItem.addEventListener('click', async () => {
//     const user = await readUserData()
//     const key = await user.keyValue

//     navigator.clipboard
//         .writeText(key)
//         .then(() => {})
//         .catch((error) => {})
// })

export const keyItem = async () => {
    const user = await readUserData()
    const keyValue = await user.keyValue

    const key = document.createElement('div')
    key.className = 'key-item profile-item'

    const keyTitle = document.createElement('div')
    keyTitle.textContent = 'Активный ключ'
    keyTitle.className = 'profile-item-title'

    const keyContent = document.createElement('div')
    keyContent.textContent = keyValue
    keyContent.className = 'profile-item-content'

    key.append(keyTitle, keyContent)

    key.addEventListener('click', () => {
        navigator.clipboard
            .writeText(keyValue)
            .then(() => {})
            .catch((error) => {})
    })

    return key
}
