import axios from 'axios'

export async function fetchData(config = 'all') {
    try {
        const container = document.querySelector('.body')
        container.innerHTML =
            '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'

        const response = await axios.get(
            `https://restcountries.com/v3/${config}`
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
}
