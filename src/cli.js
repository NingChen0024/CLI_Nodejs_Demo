import arg from 'arg'
import clear from 'clear'
import displayProducts from './displayProducts'
import displayMyCart from './displayMyCart'
import displayBanner from './displayBanner'
import addProducts from './addProducts'
import removeItems from './removeItems'

function parseArgumentsIntoOptions(rawArgs) {
  const args = arg(
    {
      '--products': Boolean,
      '--myCart': Boolean,
      '--add': Boolean,
      '--remove': Boolean
    },
    {
      argv: rawArgs.slice(2)
    }
  )
  return {
    list: args['--products'] || false,
    cart: args['--myCart'] || false,
    add: args['--add'] || false,
    remove: args['--remove'] || false
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
  // to add product to the shopping cart once
  // the argument is --add
  if (options.add){
    addProducts()
    return{
    }
  }
  // display items in the cart and allow users
  // to remove it by inputing name and amount
  // once the argument is --remove
  if (options.remove){
    removeItems()
    return{
    }
  }

  clear()
  displayBanner()
  return {
    ...options
  }
}

export async function cli(args) {
  displayBanner()
  let options = parseArgumentsIntoOptions(args)
  options = await promptForMissingOptions(options)
}