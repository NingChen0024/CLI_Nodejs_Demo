import Table from 'cli-table'

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
// are able in the shopping cart
function displayProducts () {
  var totalPrice = 0
  var itemsInCart = []
  const items = require('./shoppingCart.json')
  items.map(item => {
    if (containsItem(item, itemsInCart)) {
      itemsInCart = incrementAmount(item, itemsInCart)
    } else {
      var newItem = { name: item.name, price: item.price, amount: 1 }
      itemsInCart.push(newItem)
    }
    totalPrice = totalPrice + item.price
  })
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
}

export default displayProducts
