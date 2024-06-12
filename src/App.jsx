/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

import WelcomeView from './views/WelcomeView/WelcomeView'
import SignUpView from './views/SignUpView/SignUpView'
import SignInView from './views/SignInView/SignInView'

function App() {
    const [currentView, setCurrentView] = useState('welcome')

    function handleSignUpButton() {
        setCurrentView('signUp')
    }

    function handleSignInButton() {
        setCurrentView('signIn')
    }

    return (
        <>
            {currentView === 'welcome' && (
                <WelcomeView
                    primaryButtonHandler={handleSignUpButton}
                    secondaryButtonHandler={handleSignInButton}
                />
            )}
            {currentView === 'signUp' && <SignUpView />}
            {currentView === 'signIn' && <SignInView />}
        </>
    )
}

export default App
