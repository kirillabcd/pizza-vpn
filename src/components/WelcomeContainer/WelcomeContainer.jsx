import './WelcomeContainer.scss'

/* eslint-disable react/prop-types */
function WelcomeContainer(props) {
    return <div className='welcome-container'>{props.children}</div>
}

export default WelcomeContainer
