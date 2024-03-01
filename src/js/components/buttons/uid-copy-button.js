import { getUser } from '../../functions/get-user'
export const uidButton = document.createElement('button')
uidButton.className = 'small-button'
uidButton.textContent = 'User ID'

uidButton.addEventListener('click', () => {
    const user = getUser()
    const userId = user.uid

    navigator.clipboard
        .writeText(userId)
        .then(() => {
            console.log(`User ID ${userId} успешно скопирован в буфер обмена.`)
        })
        .catch((error) => {
            console.error('Не удалось скопировать User ID: ', error)
        })
})
