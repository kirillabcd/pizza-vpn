import { logOutUser } from '../../functions/log-out-user'
import { directRouter } from '../../functions/vanilla-router'

export const logOutItem = document.createElement('div')
logOutItem.className = 'log-out-item profile-item'
logOutItem.textContent = 'Log out'

logOutItem.addEventListener('click', () => {
    logOutUser()
    directRouter('welcome')
})
