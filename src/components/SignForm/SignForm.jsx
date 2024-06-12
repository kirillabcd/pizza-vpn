/* eslint-disable react/prop-types */
import './SignForm.scss'

function SignForm(props) {
    return (
        <form className='sign-form' action='submit'>
            {props.children}
        </form>
    )
}

export default SignForm
