// import Table from 'cli-table'

// Iterate through the item list to see
// if the new item is already in the list
function containsItem (obj, list) {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i].name === obj.name) {
      return true
    }
  }
  return false
}

// Increase the amount by one if
// the Item is in the list
function incrementAmount (obj, list) {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i].name === obj.name) {
      list[i].amount = list[i].amount + 1
      return list
    }
  }
}

// this function display all products that
// are able to be added to the shopping cart
module.exports = function displayProducts () {
  const Table = require('cli-table')
  var totalPrice = 0
  var itemsInCart = []
  const items = require('./shoppingCart.json')
  // reduce duplicatded items and add certain amount of the items
  // into the cart based on the number of duplication
  items.map(item => {
    if (containsItem(item, itemsInCart)) {
      itemsInCart = incrementAmount(item, itemsInCart)
    } else {
      var newItem = { name: item.name, price: item.price, amount: 1 }
      itemsInCart.push(newItem)
    }
    totalPrice = totalPrice + item.price
  })
  // create a table for displaying
  var table = new Table({
    head: ['Item', 'Price', 'Amount'],
    colWidths: [10, 10, 10]
  })
  itemsInCart.map(item =>
    table.push(
      [item.name, item.price, item.amount]
    )
  )
  console.log(table.toString())
  console.log('               Total Price: ' + totalPrice)
  return totalPrice
}
