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

export const passwordInputError = document.createElement('span')
passwordInputError.textContent = 'Password should be at least 6 characters'
passwordInputError.className = 'input-error password-input-error'

passwordInputWrapper.append(passwordInput, passwordInputLabel, passwordInputError)
