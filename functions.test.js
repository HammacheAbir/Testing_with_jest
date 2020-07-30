const functions= require ('./functions')

test('should return the sum', () => {
    expect(functions.add(2,2)).toBe(4)
})

test('should return null', () => {
    expect(functions.isNull()).toBeNull()
})

test('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy()
})

