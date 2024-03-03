export const getOutlineItem = document.createElement('div')
getOutlineItem.textContent = 'Get Outline client'
getOutlineItem.className = 'get-outline-item profile-item'
const url = 'https://getoutline.org/ru/get-started/#step-3'

getOutlineItem.addEventListener('click', () => {
    window.open(url, '_blank')
})
