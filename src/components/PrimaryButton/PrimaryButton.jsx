/* eslint-disable react/prop-types */

import './PrimaryButton.scss'

function PrimaryButton(props) {
    return (
        <button className='button-primary' onClick={props.primaryButtonHandler}>
            {props.buttonText}
        </button>
    )
}

export default PrimaryButton
