/* eslint-disable react/prop-types */
import './SecondaryButton.scss'

function SecondaryButton(props) {
    return (
        <button className='button-secondary' onClick={props.secondaryButtonHandler}>
            {props.buttonText}
        </button>
    )
}

export default SecondaryButton
