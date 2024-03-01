import { signInButton } from '../components/sign-in-button.js'
import { emailInputWrapper } from '../components/email-input.js'
import { passwordInputWrapper } from '../components/password-input.js'
import { createLinkButton } from '../components/link-button.js'
import { resetPasswordButton } from '../components/reset-password-button.js'

export const signIn = () => {
    const signInSection = document.createElement('section')
    signInSection.className = 'sign-in'

    const title = document.createElement('h2')
    title.className = 'title sign-in-title'
    title.textContent = 'Log in'

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
    const newLinkButton = createLinkButton('Sign up', 'sign-up')
    const newResetPasswordButton = resetPasswordButton()

    // ----> BUTTONS WRAPPER
    const buttonsWrapper = document.createElement('div')
    buttonsWrapper.className = 'sign-buttons-wrapper'

    buttonsWrapper.append(newSignInButton, newLinkButton, newResetPasswordButton)

    form.append(newEmailInput, newPasswordInput, buttonsWrapper)

    signInSection.append(title, form)

    return signInSection
}
