// Render Detail Country Template
import { countryDetails } from '../templates/country-details'
import { bordersCountries } from '../templates/borders-countries'

export async function renderCountry(country, forward = true) {
    const storageCountries = JSON.parse(localStorage.getItem('countries'))
    const countryData = storageCountries.find(
        (ctr) => ctr.name.common === country
    )
    const container = document.querySelector('.body')

    if (forward) history.pushState({}, '', `/${countryData.name.common}`)

    // Add HTML structure of country
    container.innerHTML = countryDetails(countryData)

    // Prepare to go another detail country by clicking borders countries
    bordersCountries(countryData.borders)

    // Add an event for the Back Button
    let backButton = document.querySelector('.back-btn')

    backButton.addEventListener('click', () => {
        window.history.back()
    })
}
