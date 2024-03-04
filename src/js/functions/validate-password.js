import { passwordInput } from '../components/inputs/password-input'

export const validatePassword = () => {
    if (passwordInput.value.length >= 6) {
        passwordInput.classList.add('valid')
        passwordInput.classList.remove('not-valid')
    }

    if (passwordInput.value.length < 6) {
        passwordInput.classList.add('not-valid')
        passwordInput.classList.remove('valid')
    }
}
