import arg from 'arg'
import inquirer from 'inquirer'
import displayProducts from './displayProducts'
import displayMyCart from './displayMyCart'
import displayBanner from './displayBanner'
import addProducts from './addProducts'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
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
    }
  }

  // display products in the cart and total price
  // once the argument is --myCart
  if (options.cart){
    displayMyCart()
    return {
    }
  }

  // display the product list and allow users
  // to add product to the shopping cart
  if (options.add){
    addProducts()
    return{
    }
  }

  if (options.remove){
    removeItems()
    return{
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
  
}