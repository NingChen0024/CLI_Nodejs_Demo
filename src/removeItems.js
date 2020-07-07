import inquirer from 'inquirer'
import displayMyCart from './displayMyCart'
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

// this function display all products that
// are able to be purhcased
async function removeItems () {
  displayMyCart()
  const items = require('./shoppingCart.json')
  const uniqueNameSet = new Set(items.map(item => item.name))
  const uniqueName = Array.from(uniqueNameSet)
  const questions = []
  questions.push({
    type: 'list',
    name: 'name',
    message: 'Please choose an item!',
    choices: uniqueName
  })
  questions.push({
    type: 'input',
    name: 'amount',
    message: 'Please input the amount!',
    default: 1
  })
  const answers = await inquirer.prompt(questions)
  const item = findItem(answers, items)
  for (var i = 0; i < answers.amount; i++) {
    for (var j = 0; j < items.length; j++) {
      if (items[j].name === item.name) {
        items.splice(j, 1)
        break
      }
    }
    // remove two items that have the name the user
    // choose, and the remove action runs untill
    // the amount of items are deleted
  }
  fs.writeFileSync('src/shoppingCart.json', JSON.stringify(items, null, 4), err => {
    if (err) throw err
  })
  console.log('items are removed successfully!')
}

export default removeItems
