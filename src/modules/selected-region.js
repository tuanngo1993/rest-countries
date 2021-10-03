import { renderCountries } from './render-countries'

export function selectedRegion() {
    if (!localStorage.getItem('countries')) return

    const storageCountries = JSON.parse(localStorage.getItem('countries'))
    const selectedValue = this[this.selectedIndex].text
    const searchInput =
        this.parentNode.previousElementSibling.querySelector('.country-search')

    searchInput.value = ''

    const regionCountries = storageCountries.filter(
        (item) => item.region === selectedValue
    )
    renderCountries(regionCountries)
}
