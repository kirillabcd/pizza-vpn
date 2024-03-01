export const emailInputWrapper = document.createElement('div')
emailInputWrapper.className = 'sign-input-wrapper email-input-wrapper'

export const emailInput = document.createElement('input')
emailInput.id = 'email-input'
emailInput.className = 'sign-input email-input'
emailInput.type = 'email'
emailInput.placeholder = ''
emailInput.required = true
emailInput.autocomplete = 'off'

const emailInputLabel = document.createElement('label')
emailInputLabel.htmlFor = 'email-input'
emailInputLabel.textContent = 'Email'
emailInputLabel.className = 'email-input-label'

export const emailInputError = document.createElement('span')
emailInputError.textContent = 'Email is not valid'
emailInputError.className = 'input-error email-input-error'

emailInputWrapper.append(emailInput, emailInputLabel, emailInputError)
