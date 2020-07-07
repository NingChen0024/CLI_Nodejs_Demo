import fs from 'fs'

// this function display all products that
// are able to be purhcased
function displayProducts () {
  var totalPrice = 0
  const rawdata = fs.readFileSync('shoppingCart.json')
  const products = JSON.parse(rawdata)
  products.map(product => {
    totalPrice = totalPrice + product.price
  })
  console.log(products)
  console.log('Total Price: ' + totalPrice)
}

export default displayProducts
