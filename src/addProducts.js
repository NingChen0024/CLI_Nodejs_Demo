import inquirer from 'inquirer'
import fs from 'fs'

// find the item object the user chosed
function findItem (obj, list) {
  var i
  for (i = 0; i < list.length; i++) {
    if (list[i].name === obj.name) {
      return list[i]
    }
  }
  return null
}

// this function display all commands
// that can be used
async function addProducts () {
  const products = require('./products.json')
  const items = require('./shoppingCart.json')
  const questions = []
  var productNames = []

  products.map(product => productNames.push(product.name))
  questions.push({
    type: 'list',
    name: 'name',
    message: 'Please choose a product to add to the shipping cart!',
    choices: productNames,
    default: 'Apple'
  })
  const answers = await inquirer.prompt(questions)
  const newItem = findItem(answers, products)
  items.push(newItem)
  fs.writeFileSync('src/shoppingCart.json', JSON.stringify(items, null, 4), err => {
    if (err) throw err
  })
  console.log('The item is added to the shopping cart!')
}

export default addProducts
