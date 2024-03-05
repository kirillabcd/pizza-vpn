export const getOutlineItem = document.createElement('div')

getOutlineItem.className = 'get-outline-item profile-item'

const getOutlineTitle = document.createElement('div')
getOutlineTitle.textContent = 'Скачать Outline'
getOutlineTitle.className = 'profile-item-title'

getOutlineItem.append(getOutlineTitle)

const url = 'https://getoutline.org/ru/get-started/#step-3'

getOutlineItem.addEventListener('click', () => {
    window.open(url, '_blank')
})
