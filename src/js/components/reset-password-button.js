import { resetPassword } from '../functions/reset-password'

export const resetPasswordButton = () => {
    const linkButton = document.createElement('a')
    linkButton.className = 'link-button'
    linkButton.textContent = 'Reset password'

    linkButton.addEventListener('click', (event) => {
        event.preventDefault
        resetPassword()
    })

    return linkButton
}
