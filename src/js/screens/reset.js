import { emailInputWrapper } from '../components/inputs/email-input.js'
import { resetPasswordButton } from '../components/buttons/reset-password-button'

export const resetPassword = () => {
    const resetPasswordSection = document.createElement('section')
    resetPasswordSection.className = 'reset-password'

    const title = document.createElement('h2')
    title.className = 'title reset-title'
    title.textContent = 'Сброс пароля'

    const form = document.createElement('form')
    form.action = 'submit'
    form.className = 'form'

    // ----> EMAIL INPUT
    const newEmailInput = emailInputWrapper
    const newResetPasswordButton = resetPasswordButton

    form.append(newEmailInput, newResetPasswordButton)

    resetPasswordSection.append(title, form)

    return resetPasswordSection
}
