import { signInButton } from '../components/buttons/sign-in-button.js'
import { emailInputWrapper } from '../components/inputs/email-input.js'
import { passwordInputWrapper } from '../components/inputs/password-input.js'
import { createLinkButton } from '../components/buttons/link-button.js'

export const signIn = () => {
    const signInSection = document.createElement('section')
    signInSection.className = 'sign-in'

    const title = document.createElement('h2')
    title.className = 'title sign-in-title'
    title.textContent = 'Вход'

    const form = document.createElement('form')
    form.action = 'submit'
    form.className = 'form'

    // ----> EMAIL INPUT
    const newEmailInput = emailInputWrapper

    // ----> PASSWORD INPUT
    const newPasswordInput = passwordInputWrapper

    // ----> SIGN IN BUTTON
    const newSignInButton = signInButton

    // ----> LINK BUTTONS
    const newRegisterLinkButton = createLinkButton('Нет аккаунта?', 'Зарегистрироваться', 'sign-up')
    const newResetPasswordLinkButton = createLinkButton('Забыли пароль?', 'Сбросить', 'reset')

    // ----> BUTTONS WRAPPER
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.className = 'sign-buttons-wrapper'

    buttonsWrapper.append(newSignInButton, newRegisterLinkButton, newResetPasswordLinkButton)

    form.append(newEmailInput, newPasswordInput, buttonsWrapper)

    signInSection.append(title, form)

    return signInSection
}
