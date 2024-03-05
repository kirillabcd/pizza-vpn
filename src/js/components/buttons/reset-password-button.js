import { resetPassword } from '../../functions/reset-password'

export const resetPasswordButton = document.createElement('button')
resetPasswordButton.className = 'reset-password-button button-primary'
resetPasswordButton.textContent = 'Отправить'

resetPasswordButton.addEventListener('click', (event) => {
    event.preventDefault()
    resetPassword()
})
