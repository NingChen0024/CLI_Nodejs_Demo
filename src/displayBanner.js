import figlet from 'figlet'
import chalk from 'chalk'
import clear from 'clear'
import Table from 'cli-table'

// this function display all commands
// that can be used
function displayBanner () {
  var table = new Table({
    style: { head: ['magenta'] },
    head: ['Commands', 'Description'],
    colWidths: [30, 50]

  })
  table.push(
    ['ecommerce --products', 'Check all the products you can buy'],
    ['ecommerce --myCart', 'View your shopping cart'],
    ['ecommerce --add', 'Adding products to the shopping cart'],
    ['ecommerce --remove', 'Removing items from the Shopping cart']
  )
  clear()
  console.log(chalk.magenta(figlet.textSync('Welcome', { horizontalLayout: 'full' })))
  console.log(table.toString())
}

export default displayBanner
