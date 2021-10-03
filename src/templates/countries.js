export const countriesHTML = `
    <div
      class="
        flex flex-wrap
        justify-between
        gap-6
      "
      >
        <div
            class="
              flex
              bg-white
              h-12
              items-center
              shadow
              px-6
              flex-grow
              max-w-lg
              min-w-full
              md:min-w-0
              dark:bg-gray-700
            "
        >
          <div class="mr-2">
            <img src="./src/images/icon-search.png" alt="Search" />
          </div>
          <label class="flex-grow flex">
            <input
                class="country-search outline-none text-sm flex-grow bg-transparent"
                type="text"
                placeholder="Search for a country..."
            />
          </label>
        </div>
        <div class="flex bg-white h-12 shadow px-6 dark:bg-gray-700">
          <label for="region-filter"></label>
          <select
              class="outline-none cursor-pointer pr-4 bg-transparent"
              name="region-filter"
              id="region-filter"
          >
            <option value="0" disabled selected>Filter by Region</option>
            <option value="1">Africa</option>
            <option value="2">Americas</option>
            <option value="3">Asia</option>
            <option value="4">Europe</option>
            <option value="5">Oceania</option>
          </select>
        </div>
      </div>
      <div
          class="
            countries
            grid grid-cols-1
            gap-8
            mb-8
            md:grid-cols-2
            lg:grid-cols-4
            "
      ></div>
`
