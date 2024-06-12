import './PasswordInput.scss'

function PasswordInput() {
    return (
        <div className='password-input-wrapper'>
            <input
                className='password-input'
                id='password-input'
                type='password'
                placeholder=''
                required='true'
                autoComplete='off'
                pattern='.{6,}'
            ></input>
            <label htmlFor='password-input' className='password-input-label'>
                Пароль
            </label>
        </div>
    )
}

export default PasswordInput
