import loginCart from '../pageobjects/loginCart.js'

describe('adding one item to cart', () => {
    it('should login with valid credentials and add items to cart', async () => {
        await loginCart.open()
        await loginCart.addOneItemToCart('standard_user', 'secret_sauce')

        })    
})
    
    it('should login with valid credentials and add many items to cart', async () => {
        await loginCart.open()
        await loginCart.addmanyItemsToCart('standard_user', 'secret_sauce')
})
    

    it('should login with valid credentials and add all items to cart', async () => {
        await loginCart.open()
        await loginCart.addAllItemsToCart('standard_user', 'secret_sauce')
})
    
    
    //Positive and Stress test