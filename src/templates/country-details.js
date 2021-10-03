import { convertArea } from '../modules/convert-area'

export function countryDetails(country) {
    return `
         <div>
            <button class="back-btn inline-flex items-center gap-2 rounded-md py-1 px-2 dark:bg-gray-700">
                <div>
                    <img class="dark:filter dark:brightness-0 dark:invert" src="./src/images/icon-back.png" alt="Back">
                </div>
                <div>Back</div>
            </button>
        </div>
        <div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-32">
            <div>
                <img class="w-full" src=${country.flags[0]} alt="Flag">
            </div>
            <div class="flex flex-col gap-6 self-center">
            <div class="font-bold text-2xl">${country.name['common']}</div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Native Name:&nbsp;</div> ${
                    Object.entries(country.name.nativeName)[0][1].common
                }
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Area:&nbsp;</div> ${convertArea(
                    country.area
                )}
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Region:&nbsp;</div> ${
                    country.region
                }
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Sub Region:&nbsp;</div> ${
                    country.subregion
                }
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Capital:&nbsp;</div> ${[
                    ...country.capital,
                ].join(', ')}
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Top Level Domain:&nbsp;</div> ${[
                    ...country.tld,
                ].join(', ')}
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Currencies:&nbsp;</div> ${
                    Object.entries(country.currencies)[0][0]
                }
            </div>
            <div class="inline-flex">
                <div class="font-medium flex-shrink-0">Languages:&nbsp;</div> ${
                    Object.entries(country.languages)[0][1]
                }
            </div>
          </div>
                <div class="flex flex-col lg:flex-row lg:items-baseline gap-2">
                <div class="font-medium flex-shrink-0">Border Countries:</div>
                <div class="borders-countries flex flex-wrap gap-2"></div>
          </div>
        </div>
      </div>
    `
}
