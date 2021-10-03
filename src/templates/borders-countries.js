import { renderCountry } from '../modules/render-country'

export function bordersCountries(countries) {
    const storageCountries = JSON.parse(localStorage.getItem('countries'))
    let bordersCountries = document.querySelector('.borders-countries')

    if (countries?.length) {
        for (let i = 0; i < countries.length; i++) {
            const country = storageCountries.find(
                (ctr) => ctr.cca3 === countries[i]
            )
            let bordersCountry = document.createElement('div')

            bordersCountry.classList.add(
                'cursor-pointer',
                'shadow',
                'px-4',
                'py-1',
                'dark:bg-gray-700',
                'rounded'
            )
            bordersCountry.textContent = country.name.common
            bordersCountry.addEventListener(
                'click',
                renderCountry.bind(this, country.name.common)
            )

            bordersCountries.insertAdjacentElement('beforeend', bordersCountry)
        }
    } else {
        bordersCountries.textContent = 'none'
    }
}
