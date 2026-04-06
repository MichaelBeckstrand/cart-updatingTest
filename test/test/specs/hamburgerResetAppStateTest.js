import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting Logout', () => {
    beforeEach(async () => {
                    await loginhamburger.open();
    it('should login with valid credentials and test reset app state', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnResetAppState('standard_user', 'secret_sauce')
 })    
}) 

//positive test

it ('should stress test the reset app state button', async () => {
        await loginhamburger.open() 
        await loginhamburger.resetAppStateStressTest('standard_user', 'secret_sauce')
    })

//stress test 

})