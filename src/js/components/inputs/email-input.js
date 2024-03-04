import { validateEmail } from '../../functions/validate-email'

export const emailInputWrapper = document.createElement('div')
emailInputWrapper.className = 'sign-input-wrapper email-input-wrapper'

export const emailInput = document.createElement('input')
emailInput.id = 'email-input'
emailInput.className = 'sign-input email-input'
emailInput.type = 'email'
emailInput.pattern = '^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
emailInput.placeholder = ''
emailInput.required = true
emailInput.autocomplete = 'off'

const emailInputLabel = document.createElement('label')
emailInputLabel.htmlFor = 'email-input'
emailInputLabel.textContent = 'Email'
emailInputLabel.className = 'email-input-label'

const emailInputBanner = document.createElement('span')
emailInputBanner.className = 'input-banner'

emailInputWrapper.append(emailInput, emailInputLabel, emailInputBanner)

emailInput.addEventListener('input', () => {
    validateEmail()
})
