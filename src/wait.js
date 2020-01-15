//function to test async operation, as if for an API call or something similar

export default function(seconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved')
        }, seconds * 1000)
    })
}