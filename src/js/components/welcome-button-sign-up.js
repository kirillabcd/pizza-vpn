import { directRouter } from '../functions/vanilla-router'

export const welcomeButtonSignUp = document.createElement('button')
welcomeButtonSignUp.className = 'button-primary'
welcomeButtonSignUp.textContent = 'Get Started'

welcomeButtonSignUp.addEventListener('click', () => {
    directRouter('sign-up')
})
