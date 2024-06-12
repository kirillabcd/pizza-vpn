import './EmailInput.scss'

function EmailInput() {
    return (
        <div className='email-input-wrapper'>
            <input
                className='email-input'
                id='email-input'
                type='email'
                placeholder=''
                required='true'
                autoComplete='off'
                pattern='^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$'
            ></input>
            <label htmlFor='email-input' className='email-input-label'>
                Email
            </label>
        </div>
    )
}

export default EmailInput
