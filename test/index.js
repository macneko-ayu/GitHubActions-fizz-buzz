const assert = require('assert')
const fizzbuzz = require('../index')

describe('fizzbuzz', () => {
    it('returns FizzBuzz when value is divisible by 15', () => {
        assert(fizzbuzz(30) === 'FizzBuzz')
    })

    it('returns FizzBuzz when value is divisible by 3', () => {
        assert(fizzbuzz(3) === 'Fizz')
    })

    it('returns FizzBuzz when value is divisible by 5', () => {
        assert(fizzbuzz(5) === 'Buzz')
    })

    it('returns FizzBuzz when value is not divisible by 3 or 5', () => {
        assert(fizzbuzz(7) === '7')
    })
})