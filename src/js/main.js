import '../scss/style.scss'

import { router } from './functions/vanilla-router'
import { handleAuthStatus } from './functions/handle-auth-status'

if (sessionStorage.getItem('is_reloaded')) {
    router()
}
sessionStorage.setItem('is_reloaded', true)

window.addEventListener('popstate', () => {
    router()
})

window.addEventListener('DOMContentLoaded', () => {
    router()
})

handleAuthStatus()
