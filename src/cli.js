import arg from 'arg'
import inquirer from 'inquirer'
import displayProducts from './displayProducts'
import displayMyCart from './displayMyCart'
import displayBanner from './displayBanner'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      // '--git': Boolean,
      // '--yes': Boolean,
      // '-g': '--git',
      // '-y': '--yes'
      '--products': Boolean,
      '--myCart': Boolean,
      '--addProducts': Boolean,
      '--removeProducts': Boolean
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    // skipPrompts: args['--yes'] || false,
    // git: args['--git'] || false,
    // template: args._[0],
    // runInstall: args['--install'] || false
    list: args['--products'] || false,
    cart: args['--myCart'] || false,
    add: args['--addProducts'] || false,
    remove: args['--removeProducts'] || false
  }
}

async function promptForMissingOptions(options) {
  
  // display products once the argument key is --products
  if (options.list) {
    displayProducts()
    return {
      // ...options,
      // template: options.template || defaultTemplate
    }
  }

  // display products in the cart and total price
  // once the argument is --myCart
  if (options.cart){
    displayMyCart()
    return {
    }
  }

  const questions = []
  if (!options.template) {
    questions.push({
      type: 'list',
      name: 'template',
      message: 'Please choose which project template to use',
      choices: ['JavaScript', 'TypeScript'],
      default: defaultTemplate,
    })
  }

  if (!options.git) {
    questions.push({
      type: 'confirm',
      name: 'git',
      message: 'Initialize a git respository?',
      default: false,
    })
  }

  const answers = await inquirer.prompt(questions)
  clear()
  return {
    ...options,
    template: options.template || answers.template,
    git: options.git || answers.git,
  }
}

export async function cli(args) {
  
  displayBanner()
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
  console.log(options)


  // let rawdata = fs.readFileSync('products.json')
  // let products = JSON.parse(rawdata)
  // console.log(products)


}