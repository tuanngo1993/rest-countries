import { convertArea } from '../modules/convert-area'

export function countryCard(country) {
    return `
        <div class="country flex bg-white flex-col shadow cursor-pointer">
            <div class="md:h-48 2xl:h-52 flex-shrink-0">
                <img class="w-full h-full object-cover" src=${
                    country.flags[0]
                } alt="country">
            </div>
            <div class="flex flex-col p-6 pt-2 gap-0.5 flex-grow bg-gray-50 dark:bg-gray-700">
                <div class="country my-2 font-bold">${
                    country.name['common']
                }</div>
                <div class="flex gap-2">
                    <div>Area:</div>
                    <div class="font-thin">${convertArea(country.area)}</div>
                </div>
            <div class="flex gap-2">
                <div>Region:</div>
                <div class="font-thin">${country.region}</div>
            </div>
            <div class="flex gap-2">
                <div>Capital:</div>
                <div class="font-thin capital">${country.capital}</div>
            </div>
          </div>
        </div>
    `
}
