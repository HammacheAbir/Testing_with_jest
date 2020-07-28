const functions= require ('./functions')

test('should return the sum', () => {
    expect(functions.add(2,2)).toBe(4)
})
