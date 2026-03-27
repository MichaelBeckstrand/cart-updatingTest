import loginCart from '../pageobjects/loginCart.js'

describe('adding one item to cart multiple times', () => {  
   it ('should login with valid credentials and add items to cart multiple times', async () => {
        await loginCart.open()
        await loginCart.loginOnceAddItemLoop('standard_user', 'secret_sauce')
   })
})
    
//performace test 