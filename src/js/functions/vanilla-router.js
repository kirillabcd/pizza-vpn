import { welcome } from '../screens/welcome.js'
import { signUp } from '../screens/sign-up.js'
import { signIn } from '../screens/sign-in.js'
import { userProfile } from '../screens/profile.js'

const app = document.querySelector('.app')

const routes = {
    '/': { render: welcome },
    '/sign-up': { render: signUp },
    '/sign-in': { render: signIn },
    '/profile': { render: userProfile },
}

export async function router() {
    const path = location.pathname
    const view = routes[path]

    if (view) {
        app.replaceChildren()
        const renderedView = await view.render()
        app.append(renderedView)
    } else {
        history.replaceState('', '', '/')
        router()
    }
}

export function directRouter(section) {
    let target = `/${section}`
    history.pushState('', '', target)
    router()
}
