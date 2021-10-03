import '../styles/style.css'
import '../styles/loader.css'
import { renderCountries } from '../modules/render-countries'
import { fetchData } from '../modules/fetch-data'
import { renderCountry } from '../modules/render-country'

// Will be triggered after history.addState()
window.onpopstate = () => {
    if (window.location.pathname === '/' || window.location.pathname === '/rest-countries/') {
        renderCountries(JSON.parse(localStorage.getItem('countries')))
    } else {
        renderCountry(
            window.location.pathname.replace('/', '').split('%20').join(' '),
            false
        )
    }
}

function handleClickMode() {
    document.documentElement.classList.toggle('dark')

    if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
        localStorage.theme = 'light'
    } else {
        localStorage.theme = 'dark'
    }
}

// App runs from here
const modeButton = document.querySelector('.mode')

modeButton.addEventListener('click', handleClickMode)

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

fetchData().then((result) => {
    renderCountries(result)
    localStorage.setItem('countries', JSON.stringify(result))
})
