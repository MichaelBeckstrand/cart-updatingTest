import loginCart from '../pageobjects/loginCart.js'

describe('navigating to cart while logged out', () => {
    it('should login with valid credentials, logout then attempt to access cart while logged out', async () => {
        await loginCart.open()
        await loginCart.navigateToCartSecurityTest('standard_user', 'secret_sauce')

        })    
})

 //security test
    

    

    
