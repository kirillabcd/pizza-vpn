/* eslint-disable react/prop-types */
import WelcomeContainer from '../../components/WelcomeContainer/WelcomeContainer'
import WelcomePizza from '../../components/WelcomePizza/WelcomePizza'
import ButtonsContainer from '../../components/ButtonsContainer/ButtonsContainer'
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton.jsx'
import SecondaryButton from '../../components/SecondaryButton/SecondaryButton.jsx'

const primaryButtonText = 'Зарегистрироваться'
const secondaryButtonText = 'Войти'

function WelcomeView(props) {
    return (
        <>
            <WelcomeContainer>
                <WelcomePizza></WelcomePizza>
                <ButtonsContainer>
                    <PrimaryButton
                        buttonText={primaryButtonText}
                        primaryButtonHandler={props.primaryButtonHandler}
                    ></PrimaryButton>

                    <SecondaryButton
                        buttonText={secondaryButtonText}
                        secondaryButtonHandler={props.secondaryButtonHandler}
                    ></SecondaryButton>
                </ButtonsContainer>
            </WelcomeContainer>
        </>
    )
}

export default WelcomeView
