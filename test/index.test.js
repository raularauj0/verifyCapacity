const verifyCapacity = require('../src/index.js')

test('should return 0 if capacity is 10 and theres is no one in the bus and no one is waiting', () => {
    expect(verifyCapacity(10,0,0)).toBe(0)
})
test('should return 1 if capacity is 5 and have 5 on and have 1 waiter', () => {
    expect(verifyCapacity(5,5,1)).toBe(1)
})

test('should return 1 if capacity is 5 and have 2 on and have 4 waiter', () => {
    expect(verifyCapacity(5,2,4)).toBe(1)
})
test('should return 1 if capacity is 5 and have 2 on and have 4 waiter', () => {
    expect(verifyCapacity(10,5,5)).toBe(0)
})
test('should return 1 if capacity is 5 and have 2 on and have 4 waiter', () => {
    expect(verifyCapacity(100,60,50)).toBe(10)
})

