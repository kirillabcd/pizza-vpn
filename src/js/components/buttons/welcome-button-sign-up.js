import { directRouter } from '../../functions/vanilla-router'

export const welcomeButtonSignUp = document.createElement('button')
welcomeButtonSignUp.className = 'button-primary'
welcomeButtonSignUp.textContent = 'Заказать пиццу'

welcomeButtonSignUp.addEventListener('click', () => {
    directRouter('sign-up')
})
