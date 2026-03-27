import { $, expect } from '@wdio/globals'
import pageUrl from './pageUrl.js';
import selectors from './selectors.js';



class loginhamburger extends pageUrl {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get clickbutton () {
        return $('input[type="submit"]');
        }
    
  
     get clickOnAllItems () {
        return $('#inventory_sidebar_link')
     }
      get clickOnAbout () {
        return $('#about_sidebar_link')
     }
      get clickOnLogout () {
        return $('#logout_sidebar_link')
     }
       get clickOnResetAppState () {
        return $('#reset_sidebar_link')
     }
        get clickOnHamburgerMenu () {
        return $('#react-burger-menu-btn')
     
      }
       async clickingOnAllItems (username, password) { 
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(selectors.referenceheader).toBeExisting()

        await this.clickOnHamburgerMenu.click()
      
 }

    
    open ()   {
        return super.open('login');
    }
}

export default new loginhamburger();
