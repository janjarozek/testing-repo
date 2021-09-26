const sumTester = require('./sum.js')

test('Test if the function adds two variables as numbers?', () => {
    expect(sumTester.sum('1','2')).toBe(3);
    expect(sumTester.sum(4,2)).toBe(6);
    expect(sumTester.sum('4','5')).toBe(9);
});