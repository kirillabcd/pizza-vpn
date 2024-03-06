import { directRouter } from '../../functions/vanilla-router'

export const createLinkButton = (text, linkText, route) => {
    const linkButtonContainer = document.createElement('div')
    linkButtonContainer.className = 'link-button-container'

    const linkButtonText = document.createElement('div')
    linkButtonText.textContent = text
    linkButtonText.className = 'link-button-text'

    const linkButton = document.createElement('a')
    linkButton.textContent = linkText
    linkButton.className = 'link-button'

    linkButtonContainer.append(linkButtonText, linkButton)

    linkButton.addEventListener('click', (event) => {
        event.preventDefault
        directRouter(route)
    })

    return linkButtonContainer
}
