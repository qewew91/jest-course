const {sum, nativeNull} = require('./intro')

describe('Sum function', () => {
    test('should return sum of two values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 3)).toEqual(4)
    })

    test('should return value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThan(10)
    })

    test('should sum 2 float values correctly', () => {
        expect(sum(.1, .2)).toBeCloseTo(.3)
    })
})



describe('Native null function', () => {
    test('should return false value null', () => {
        expect(nativeNull()).toBe(null)
        expect(nativeNull()).toBeNull()
        expect(nativeNull()).toBeFalsy() // undefined, null, 0, '', NaN
        expect(nativeNull()).toBeDefined()
        expect(nativeNull()).not.toBeTruthy()
        expect(nativeNull()).not.toBeUndefined()
    })
})