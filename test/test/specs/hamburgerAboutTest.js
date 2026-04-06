import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Selecting About', () => {
    it('should login with valid credentials and test about button', async () => {
        await loginhamburger.open()
        await loginhamburger.clickingOnAbout('standard_user', 'secret_sauce') 
    // positive test
    })
})



    
