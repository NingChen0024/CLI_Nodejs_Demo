import figlet from 'figlet'
import chalk from 'chalk'
import clear from 'clear'
import Table from 'cli-table'
// this function display all products that
// are able to be purhcased
function displayBanner () {
  var table = new Table({
    head: ['Command', 'Description'],
    colWidths: [100, 200]
  })
  table.push(
    []
  )
  clear()
  console.log(chalk.magenta(figlet.textSync('Welcome', { horizontalLayout: 'full' })))
}

export default displayBanner
