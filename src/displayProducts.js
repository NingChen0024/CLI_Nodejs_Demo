import Table from 'cli-table'

// this function display all products that
// are able to be purhcased
function displayProducts () {
  const products = require('./products.json')
  var table = new Table({
    style: { head: ['green'] },
    head: ['Item', 'Price'],
    colWidths: [20, 10]
  })
  products.map(product =>
    table.push(
      [product.name, product.price]
    )
  )
  console.log(table.toString())
}

export default displayProducts
