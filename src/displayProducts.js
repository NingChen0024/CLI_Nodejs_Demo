import fs from 'fs'

// this function display all products that
// are able to be purhcased
function displayProducts () {
  const rawdata = fs.readFileSync('products.json')
  const products = JSON.parse(rawdata)
  console.log(products)
}

export default displayProducts
