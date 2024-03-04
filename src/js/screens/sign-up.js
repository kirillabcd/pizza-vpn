import { signUpButton } from '../components/buttons/sign-up-button.js'
import { emailInputWrapper } from '../components/inputs/email-input.js'
import { passwordInputWrapper } from '../components/inputs/password-input.js'
import { createLinkButton } from '../components/buttons/link-button.js'

export const signUp = () => {
    const signUpSection = document.createElement('section')
    signUpSection.className = 'sign-up'

    const title = document.createElement('h2')
    title.className = 'title sign-up-title'
    title.textContent = 'Регистрация'

    const form = document.createElement('form')
    form.action = 'submit'
    form.className = 'form'

    // ----> EMAIL INPUT
    const newEmailInput = emailInputWrapper

    // ----> PASSWORD INPUT
    const newPasswordInput = passwordInputWrapper

    // ----> SIGN UP BUTTON
    const newSignUpButton = signUpButton

    // ----> LINK BUTTON
    const newLinkButton = createLinkButton('Войти', 'sign-in')

    // ----> BUTTONS WRAPPER
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.className = 'sign-buttons-wrapper'

    buttonsWrapper.append(newSignUpButton, newLinkButton)

    form.append(newEmailInput, newPasswordInput, buttonsWrapper)

    signUpSection.append(title, form)

    return signUpSection
}
