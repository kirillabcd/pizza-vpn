import { directRouter } from '../../functions/vanilla-router'

export const createLinkButton = (text, route) => {
    const linkButton = document.createElement('a')
    linkButton.className = 'link-button'
    linkButton.textContent = text

    linkButton.addEventListener('click', (event) => {
        event.preventDefault
        directRouter(route)
    })

    return linkButton
}
