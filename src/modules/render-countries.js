import { countryCard } from '../templates/country-card'
import { renderCountry } from './render-country'
import { countriesHTML } from '../templates/countries'
import { selectedRegion } from './selected-region'
import { handleCountrySearch } from './country-search'

export function renderCountries(countries, filter = false) {
    if (!filter) {
        const container = document.querySelector('.body')
        container.innerHTML = countriesHTML

        const regionSelect = document.getElementById('region-filter')
        const countryInput = document.querySelector('.country-search')

        regionSelect.addEventListener('change', selectedRegion)
        countryInput.addEventListener('change', handleCountrySearch)
    }

    const countriesEl = document.querySelector('.countries')
    const countriesArr = []

    // Return nothing if we do no get any countries
    if (!countries) {
        countriesEl.innerHTML =
            '<div class="bg-yellow-100 border-l-4 border-solid border-yellow-500 p-4 text-gray-600"><p>An empty result!</p></div>'
        return
    }

    // Clean up context of parent block before rendering selected countries inside
    countriesEl.innerHTML = ''

    // Add these countries into array
    for (let i = 0; i < countries.length; i++) {
        countriesArr.push(countryCard(countries[i]))
    }

    // Add list of countries into parent block
    countriesEl.insertAdjacentHTML('afterbegin', countriesArr.join(''))

    const countryCards = document.querySelectorAll('.country')

    for (const card of countryCards) {
        const country = card.querySelector('.country')?.textContent
        card.addEventListener('click', renderCountry.bind(this, country))
    }
}
