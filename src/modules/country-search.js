import { renderCountries } from './render-countries'

export function handleCountrySearch(e) {
    if (e.target.value === '') return

    const storageCountries = JSON.parse(localStorage.getItem('countries'))
    const regionSelect = e.target
        .closest('div')
        .nextElementSibling.querySelector('#region-filter')

    regionSelect.selectedIndex = 0

    let country = storageCountries.filter((item) =>
        item.altSpellings.includes(e.target.value)
    )

    if (!country.length) country = null

    renderCountries(country, true)
}
