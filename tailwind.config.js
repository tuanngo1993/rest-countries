module.exports = {
    purge: ['./dist/*.html'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        minWidth: {
            0: '0',
            '1/5': '20%',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            full: '100%',
        },
        extend: {},
    },
    variants: {
        extend: {
            filter: ['dark'],
            brightness: ['dark'],
            invert: ['dark'],
        },
    },
    plugins: [],
}
