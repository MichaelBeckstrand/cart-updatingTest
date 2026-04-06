import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting All items', () => {
    it('should login with valid credentials and test all items button', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnAllItems('standard_user', 'secret_sauce')
 })    
}) // positive test