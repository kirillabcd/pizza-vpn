import { emailInput } from '../components/inputs/email-input'

export const validateEmail = () => {
    const email = emailInput.value
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailPattern.test(email)) {
        emailInput.classList.add('valid')
        emailInput.classList.remove('not-valid')
    } else {
        emailInput.classList.add('not-valid')
        emailInput.classList.remove('valid')
    }
}
