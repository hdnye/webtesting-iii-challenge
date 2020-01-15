import wait from './wait';

test('wait for promise to resolve', (done) => {
    wait(3).then(result => {
        expect(result).toBe('resolved')
        done()
    })
})