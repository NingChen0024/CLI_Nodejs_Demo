 This application is developed with Nodojs and Inquirerjs to create a command-line interface
 for users to interact with the system. Users need to run "sudo npm link" command first in the project 
 directory to create a shortcut taht points to the files on the system, and then run "ecommerce" command to enter the system.

 There are four commands created for users to check products they can buy(ecommerce --product),
 view the shopping cart(ecommerce --myCart), add products to the shopping cart(ecommerce --add),
 and remove items from the shopping cart (ecommerce --remove).

All the data about products and items in the shopping cart is saved in two seperated JSON files, and
several functions were created to implement the logic.

The two tests specified in the email were done by using mocha, and the test results can be found
in the project folder. Since Inquirerjs require users to answer questions defined in the logic, 
I manually modified the items in the JSON file and did the test to see if the total price 
number is correct, which was tested successfully.

