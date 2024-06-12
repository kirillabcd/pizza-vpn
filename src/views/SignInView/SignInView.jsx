import SignContainer from '../../components/SignContainer/SignContainer'
import SignTitle from '../../components/SignTitle/SignTitle'
import SignForm from '../../components/SignForm/SignForm'
import EmailInput from '../../components/EmailInput/EmailInput'
import PasswordInput from '../../components/PasswordInput/PasswordInput'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton'

const SignInTitleText = 'Вход'
const primaryButtonText = 'Войти'

function SignInView() {
    return (
        <>
            <SignContainer>
                <SignTitle titleText={SignInTitleText}></SignTitle>
                <SignForm>
                    <EmailInput></EmailInput>
                    <PasswordInput></PasswordInput>
                    <PrimaryButton buttonText={primaryButtonText}></PrimaryButton>
                </SignForm>
            </SignContainer>
        </>
    )
}

export default SignInView
