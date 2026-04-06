import loginhamburger from '../pageobjects/loginHamburger.js';

describe('Hamburger menu stress test', () => { 
it ('should try to open and close the hamburger menu mid animation', async () => {
            await loginhamburger.open()
            await loginhamburger.hamburgerOverlayNegitiveTest('standard_user', 'secret_sauce')

        })
})  

//negative element click intercepted test 








    
    
