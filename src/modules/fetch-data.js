export async function fetchData(config = 'all') {
    try {
        const container = document.querySelector('.body')
        container.innerHTML =
            '<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>'

        const request = await fetch(`https://restcountries.com/v3/${config}`)
        const response = await request.json()

        return response
    } catch (error) {
        console.log(error)
    }
}
