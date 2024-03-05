import { directRouter } from '../../functions/vanilla-router'
import { unsubscribeUser } from '../../functions/unsubscribe-user'

export const unsubscribeUserItem = document.createElement('div')
unsubscribeUserItem.className = 'unsubscribe-user-item profile-item'

const unsubscribeUserTitle = document.createElement('div')
unsubscribeUserTitle.className = 'profile-item-title'
unsubscribeUserTitle.textContent = 'Отказаться от подписки'

unsubscribeUserItem.append(unsubscribeUserTitle)

unsubscribeUserItem.addEventListener('click', () => {
    unsubscribeUser()
    directRouter('profile')
})
