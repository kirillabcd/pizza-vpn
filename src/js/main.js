import '../scss/style.scss'

import { router } from './functions/vanilla-router'
import { handleAuthStatus } from './functions/handle-auth-status'

window.addEventListener('popstate', () => {
    router()
})

window.addEventListener('DOMContentLoaded', () => {
    router()
})

handleAuthStatus()
