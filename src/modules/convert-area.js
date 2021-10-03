export function convertArea(num) {
    return (
        num.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',') +
        ' <span>km<sup>2</sup></span>'
    )
}
