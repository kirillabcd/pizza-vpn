import { directRouter } from '../../functions/vanilla-router'

export const welcomeButtonSignIn = document.createElement('button')
welcomeButtonSignIn.className = 'button-secondary'
welcomeButtonSignIn.textContent = 'Войти'

welcomeButtonSignIn.addEventListener('click', () => {
    directRouter('sign-in')
})
