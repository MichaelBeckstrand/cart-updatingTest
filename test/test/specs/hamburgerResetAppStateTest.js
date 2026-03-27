import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting Logout', () => {
    it('should login with valid credentials', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnResetAppState('standard_user', 'secret_sauce')
 })    
})
    
    
