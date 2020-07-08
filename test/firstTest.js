const assert = require('chai').assert
const displayMyCart = require('../src/displayMyCart')

describe('Calculate the total price', () => {
  it('Checks if the total price is correct', () => {
    const totalPrice = displayMyCart()
    assert.equal(totalPrice, 13.89)
  })
})
