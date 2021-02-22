const Lodash = require('./sync')

describe('Lodash: compact', () => {
    const _ = new Lodash()
    test('should be defined', () => {
        expect(_.compact).toBeDefined()
    })
    test('should remove falsy values from array', () => {
        const array = [false, 42, 0, '', true, null, 'hello']
        const res = [42, true, 'hello']
        expect(_.compact(array)).toEqual(res)
    })
    test('should not contain falsy values', () => {
        const array = [false, 42, 0, '', true, null, 'hello']
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain('')
        expect(_.compact(array)).not.toContain(0)
    })
})