import { logOutUser } from '../../functions/log-out-user'
import { directRouter } from '../../functions/vanilla-router'

export const logOutItem = document.createElement('div')
logOutItem.className = 'log-out-item profile-item'

const logOutTitle = document.createElement('div')
logOutTitle.className = 'profile-item-title'
logOutTitle.textContent = 'Выйти'

logOutItem.append(logOutTitle)

logOutItem.addEventListener('click', () => {
    logOutUser()
    directRouter('welcome')
})
