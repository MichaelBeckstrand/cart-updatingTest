import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting All items', () => {
    it('should login with valid credentials', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnAllItems('standard_user', 'secret_sauce')



        })    
})
    
    
