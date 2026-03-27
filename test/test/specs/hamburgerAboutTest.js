import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting All items', () => {
    it('should login with valid credentials', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnAbout('standard_user', 'secret_sauce')
 })    
})
    
    
//positive test 