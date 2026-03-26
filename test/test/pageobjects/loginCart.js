import { $, expect } from '@wdio/globals'
import pageUrl from './pageUrl.js';
import selectors from './selectors.js';



class loginCart extends pageUrl {
    
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
     get clickOnCart () {
        return $('a[class="shopping_cart_link"]')
     }
      get removeBackpackFromCart () {
        return $('button[class="btn btn_secondary btn_small cart_button"]')
      }
      get clickcontinueShopping () {
        return $('#continue-shopping')
      }
    
      async addOneItemToCart (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.clickbutton.click();
        expect (selectors.referenceheader).toBeExisting()
        await this.addBackpackToCart.click();
        await expect(selectors.referenceCartBadge).toBeExisting()
        await expect(selectors.referenceCartBadge).toHaveText('1')
        await this.clickOnCart.click();
        await expect(selectors.referenceBackpack).toBeExisting()
        await this.removeBackpackFromCart.click();
        await expect(selectors.referenceCartBadge).not.toBeExisting()
        await this.clickcontinueShopping.click();
        await expect(selectors.referenceheader).toBeExisting()
     


    }

    
    open () {
        return super.open('login');
    }
}

export default new loginCart();
