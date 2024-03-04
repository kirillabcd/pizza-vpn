import { validatePassword } from '../../functions/validate-password'

export const passwordInputWrapper = document.createElement('div')
passwordInputWrapper.className = 'sign-input-wrapper password-input-wrapper'

export const passwordInput = document.createElement('input')
passwordInput.className = 'sign-input password-input'
passwordInput.id = 'password-input'
passwordInput.type = 'password'
passwordInput.placeholder = ''
passwordInput.required = true
passwordInput.pattern = '.{6,}'
passwordInput.autocomplete = 'off'

const passwordInputLabel = document.createElement('label')
passwordInputLabel.htmlFor = 'password-input'
passwordInputLabel.textContent = 'Password'
passwordInputLabel.className = 'password-input-label'

const passwordInputBanner = document.createElement('span')
passwordInputBanner.className = 'input-banner'

passwordInputWrapper.append(passwordInput, passwordInputLabel, passwordInputBanner)

passwordInput.addEventListener('input', () => {
    validatePassword()
})
