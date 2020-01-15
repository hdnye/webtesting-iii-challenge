import wait from './wait';

// Async method 1
// test('wait for promise to resolve', (done) => {
//     wait(3).then(result => {
//         expect(result).toBe('resolved')
//         done()
//     }).catch(err => {
            // document(err)
//     })
// })

// Async method 2

// test('wait for promise to resolve', () => {
//     return wait(3).then(result => {
//         expect(result).toBe('resolved')
//     })
// })

// Async method 3

    test('wait for promise to resolve', async () => {
        const result = await wait(3)
        expect(result).toBe('resolved')
       
    })
    