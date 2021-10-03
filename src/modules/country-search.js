import { renderCountries } from './render-countries'

export function handleCountrySearch(e) {
    const storageCountries = JSON.parse(localStorage.getItem('countries'))
    const regionSelect = e.target
        .closest('div')
        .nextElementSibling.querySelector('#region-filter')

    regionSelect.selectedIndex = 0

    if (e.target.value === '') {
        renderCountries(storageCountries, true)
    } else {
        let country = storageCountries.filter((item) =>
            item.altSpellings.find(country => country.toLowerCase().includes(e.target.value.toLowerCase()))
        )

        if (!country.length) country = null

        renderCountries(country, true)
    }
}
