import { $, browser, expect } from '@wdio/globals'
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

        get addBackpackToCart () {
       return $('#add-to-cart-sauce-labs-backpack')
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
      get exitHamburgerMenu () {
        return $('#react-burger-cross-btn')
     }
     get hamburgerMenuOverlay () {
        return $('div[class="bm-menu"]')
     }
      
      get clickOnBackpack () {
        return $('#item_4_title_link')
     }
     get removeBackpack () {
        return $('#remove-sauce-labs-backpack')
      }
       async clickingOnAllItems (username, password) { 
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(selectors.clickOnHamburgerMenu).toBeExisting()
        await this.clickOnHamburgerMenu.click()
        await expect(selectors.clickOnAllItems).toBeExisting()
        await this.clickOnAllItems.click()
        await this.clickOnBackpack.click()
        expect(selectors.referenceBackpackPage).toBeExisting()
        expect(selectors.referenceBackpackPage).toHaveText('Sauce Labs Backpack')
        await expect(selectors.clickOnHamburgerMenu).toBeExisting()
        await this.clickOnHamburgerMenu.click()
        await expect(selectors.clickOnAllItems).toBeExisting()
        await this.clickOnAllItems.click()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
       
}
   async clickingOnAbout (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(selectors.clickOnHamburgerMenu).toBeExisting()
        await this.clickOnHamburgerMenu.click()
        await expect(selectors.clickOnAbout).toBeExisting()
        await this.clickOnAbout.click()
        await expect(browser).toHaveUrl('https://saucelabs.com/')
      }
    async clickingOnLogout (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await expect(selectors.clickOnHamburgerMenu).toBeExisting()
        await this.clickOnHamburgerMenu.click()
        await expect(selectors.clickOnLogout).toBeExisting()
        await this.clickOnLogout.click()
        await browser.back()

    }
    async clickingOnResetAppState (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
         await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await this.addBackpackToCart.click();
        await expect(selectors.referenceCartBadge).toBeExisting()
        await expect(selectors.referenceCartBadge).toHaveText('1')
        await expect(selectors.clickOnHamburgerMenu).toBeExisting()
        await this.clickOnHamburgerMenu.click()
        await expect(selectors.clickOnResetAppState).toBeExisting()
        await this.clickOnResetAppState.click()
        await expect(selectors.referenceCartBadge).not.toBeExisting()
        await browser.refresh()
        await expect(this.addBackpackToCart).toBeExisting()

    
      }
     async aboutStressTest (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
         await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        for (let i = 0; i < 100; i++) {
            await this.clickOnHamburgerMenu.click();
            await expect(selectors.clickOnAbout).toBeExisting()
            await this.clickOnAbout.click();
            await expect(browser).toHaveUrl('https://saucelabs.com/')
            await browser.back();
            await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        }
      }
      async resetAppStateStressTest (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        for (let i = 0; i < 20; i++) {
            await this.addBackpackToCart.click();
            await expect(selectors.referenceCartBadge).toBeExisting()
            await expect(selectors.referenceCartBadge).toHaveText('1')
            await this.clickOnHamburgerMenu.click();
            await browser.pause(100)
            await expect(selectors.clickOnResetAppState).toBeExisting()
            await this.clickOnResetAppState.click();
            await expect(selectors.referenceCartBadge).not.toBeExisting()
            await this.removeBackpack.click();
            await expect(this.addBackpackToCart).toBeExisting()
            await this.exitHamburgerMenu.click();
        }
      }
      async allItemsStressTest (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        for (let i = 0; i < 20; i++) {
          await this.clickOnBackpack.click();
          await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
          await this.clickOnHamburgerMenu.click();
          await expect(this.clickOnAllItems).toBeExisting()
          await this.clickOnAllItems.click(); 
          await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

      }  
    }
    async logoutStressTest (username, password) {
        for (let i = 0; i < 20; i++) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await this.clickOnHamburgerMenu.click();
        await expect(this.clickOnLogout).toBeExisting()
        await this.clickOnLogout.click();
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        
        
    }
  }
  async exitHamburgerMenuAcessibilityTest (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickbutton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await browser.keys('Tab');
    await expect(this.clickOnHamburgerMenu).toBeFocused();
    await browser.keys('Enter');
    await expect(this.exitHamburgerMenu).toBeDisplayed()
    await browser.keys('Escape');
    await browser.pause(500)
    await expect(this.exitHamburgerMenu).not.toBeDisplayed()
    

     }
  async allItemsAcessibilityTest (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickbutton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await browser.keys('Tab');
    await browser.keys('Tab');
    await browser.keys('Tab');
    await expect(this.clickOnBackpack).toBeFocused
    await browser.keys('Enter')
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    await browser.keys('Tab');
    await expect(this.clickOnHamburgerMenu).toBeFocused();
    await browser.keys('Enter');
    await expect(this.clickOnAllItems).toBeExisting();
    await expect(this.clickOnAllItems).toBeFocused();
    await browser.keys('Enter');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')

}
    async aboutAcessibilityTest (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickbutton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await browser.keys('Tab');
    await expect(this.clickOnHamburgerMenu).toBeFocused();
    await browser.keys('Enter');
    await browser.keys('Tab'); 
    await expect(this.clickOnAbout).toBeExisting();
    await expect(this.clickOnAbout).toBeFocused();
    await browser.keys('Enter');
    await expect(browser).toHaveUrl('https://saucelabs.com/')
    

     }
    async logoutAcessibilityTest (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickbutton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    await browser.keys('Tab');
    await expect(this.clickOnHamburgerMenu).toBeFocused();
    await browser.keys('Enter');
    await browser.keys('Tab');
    await browser.keys('Tab'); 
    await expect(this.clickOnLogout).toBeExisting();
    await expect(this.clickOnLogout).toBeFocused();
    await browser.keys('Enter');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/')
    

     }
    async resetAppStateAcessibilityTest (username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickbutton.click();
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    for (let i = 0; i < 4; i++) {
    await browser.keys('Tab')}
    await expect(this.clickOnBackpack).toBeFocused();
    await browser.keys('Enter');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
    for (let i = 0; i < 3; i++) {
    await browser.keys('Tab')}
    await browser.keys('Enter');
    await expect(selectors.referenceCartBadge).toBeExisting()
    await expect(selectors.referenceCartBadge).toHaveText('1')
    await browser.refresh();
    await browser.execute(() => document.body.focus());
    for (let i = 0; i < 8; i++) {
    await browser.keys('Tab')}
    await expect(this.clickOnHamburgerMenu).toBeFocused();
    await browser.keys('Enter');
    await browser.execute(() => document.body.focus());
    for (let i = 0; i < 3; i++) {
    await browser.keys('Tab')}
    await await expect(this.clickOnResetAppState).toBeFocused();
    await browser.keys('Enter'); 
    await expect(selectors.referenceCartBadge).not.toBeExisting()
    await browser.refresh()

   }
      async hamburgerExitButtonTest (username, password) {
      await this.inputUsername.setValue(username);
      await this.inputPassword.setValue(password);
      await this.clickbutton.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
      for (let i = 0; i < 20; i++) {
      await this.clickOnHamburgerMenu.waitForClickable({timeout: 5000});
      await this.clickOnHamburgerMenu.click();
      await browser.pause(500)
      await this.exitHamburgerMenu.waitForDisplayed({timeout: 5000});
      await expect(this.exitHamburgerMenu).toBeExisting()
      await this.exitHamburgerMenu.waitForClickable({timeout: 5000});
      await this.exitHamburgerMenu.click();
      await browser.pause(1000) 
      await expect(this.hamburgerMenuOverlay).not.toBeDisplayed({timeout: 5000})
      }
      
}

  async hamburgerOverlayNegitiveTest (username, password) {
      await this.inputUsername.setValue(username);
      await this.inputPassword.setValue(password);
      await this.clickbutton.click();
      await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html') 
      await this.clickOnHamburgerMenu.click();
      this.exitHamburgerMenu.click()
      try {
        await this.clickOnHamburgerMenu.click();
      }
      catch(error) 
     { await expect(error.message).toContain('element click intercepted')
}
      await expect(this.clickOnHamburgerMenu).toBeExisting()
      
      this.exitHamburgerMenu.click()
    }
        open ()   {
        return super.open('login');
    }
}

export default new loginhamburger();
