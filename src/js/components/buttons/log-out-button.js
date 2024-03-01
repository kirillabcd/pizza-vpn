import { signOutUser } from '../../functions/sign-out-user'
import { directRouter } from '../../functions/vanilla-router'

export const logOutButton = document.createElement('button')
logOutButton.className = 'small-button'
logOutButton.textContent = 'Log out'

// temp
logOutButton.addEventListener('click', () => {
    signOutUser()
    directRouter('welcome')
})
