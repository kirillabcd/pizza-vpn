import { subscribeUser } from '../../functions/subscribe-user'
import { directRouter } from '../../functions/vanilla-router'

export const subscribeItem = document.createElement('div')
subscribeItem.className = 'subscribe-item profile-item'
subscribeItem.textContent = 'Subscribe'

subscribeItem.addEventListener('click', () => {
    subscribeUser()
    directRouter('profile')
})
