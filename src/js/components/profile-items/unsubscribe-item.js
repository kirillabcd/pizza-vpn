import { directRouter } from '../../functions/vanilla-router'
import { unsubscribeUser } from '../../functions/unsubscribe-user'

export const unsubscribeUserItem = document.createElement('div')
unsubscribeUserItem.className = 'unsubscribe-user profile-item'
unsubscribeUserItem.textContent = 'Unsubscribe'

unsubscribeUserItem.addEventListener('click', () => {
    unsubscribeUser()
    directRouter('profile')
})
