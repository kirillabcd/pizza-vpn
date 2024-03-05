import { subscribeUser } from '../../functions/subscribe-user'
import { directRouter } from '../../functions/vanilla-router'

export const subscribeItem = document.createElement('div')
subscribeItem.className = 'subscribe-item profile-item'

const subscribeTitle = document.createElement('div')
subscribeTitle.className = 'profile-item-title'
subscribeTitle.textContent = 'Подписаться'

subscribeItem.append(subscribeTitle)

subscribeItem.addEventListener('click', () => {
    subscribeUser()
    directRouter('profile')
})
