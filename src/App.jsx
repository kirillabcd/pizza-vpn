import WelcomeContainer from './components/WelcomeContainer/WelcomeContainer'
import WelcomePizza from './components/WelcomePizza/WelcomePizza'
import ButtonsContainer from './components/ButtonsContainer/ButtonsContainer'
import ButtonPrimary from './components/ButtonPrimary/ButtonPrimary'
import ButtonSecondary from './components/ButtonSecondary/ButtonSecondary'

function App() {
    const primaryButtonText = 'Зарегистрироваться'
    const secondaryButtonText = 'Войти'

    return (
        <>
            <WelcomeContainer>
                <WelcomePizza></WelcomePizza>
                <ButtonsContainer>
                    <ButtonPrimary buttonText={primaryButtonText}></ButtonPrimary>
                    <ButtonSecondary buttonText={secondaryButtonText}></ButtonSecondary>
                </ButtonsContainer>
            </WelcomeContainer>
        </>
    )
}

export default App
