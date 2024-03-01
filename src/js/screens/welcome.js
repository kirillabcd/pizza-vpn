import { welcomeButtonSignUp } from '../components/buttons/welcome-button-sign-up.js'
import { welcomeButtonSignIn } from '../components/buttons/welcome-button-sign-in.js'

export const welcome = () => {
    const welcomeSection = document.createElement('section')
    welcomeSection.className = 'welcome'

    const welcomePizza = document.createElement('div')
    welcomePizza.className = 'welcome-pizza'

    const twinkleContainer = document.createElement('div')
    twinkleContainer.className = 'twinkle-container'

    for (let i = 0; i < 3; i++) {
        const twinkleElement = document.createElement('div')
        twinkleElement.className = 'twinkle-element'

        twinkleContainer.append(twinkleElement)
    }

    const buttonWrapper = document.createElement('div')
    buttonWrapper.className = 'welcome-buttons-wrapper'

    const newWelcomeButtonSignUp = welcomeButtonSignUp
    const newWelcomeButtonSignIn = welcomeButtonSignIn

    buttonWrapper.append(newWelcomeButtonSignUp, newWelcomeButtonSignIn)

    welcomePizza.append(twinkleContainer)

    welcomeSection.append(welcomePizza, buttonWrapper)
    return welcomeSection
}
