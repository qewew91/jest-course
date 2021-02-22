const expect = (val) => ({
    toBe: exp => {
        if (val === exp) {
            console.log('Success')
        } else {
            console.error(`Value is ${val}, but expected ${exp}`)
        }
    }
})

const sum = (a, b) => a + b

const nativeNull = () => null

module.exports = {sum, nativeNull}

// expect(sum(41, 1)).toBe(42)