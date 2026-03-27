import { $ } from '@wdio/globals'
import pageUrl from './pageUrl.js';


class selectors extends pageUrl {
    
    get referenceheader  () {
        return $('div[class="header_label"]');
    }
    get referenceCartBadge () {
        return $('span[class="shopping_cart_badge"]')
    }
     get referenceBackpack () {
        return $('#item_4_title_link')
    }
    get referenceBikeLight () {
        return $('#item_0_title_link')
    }
    get referenceBoltTShirt () {
        return $('#item_1_title_link')
     }
     get referenceFleeceJacket () {
        return $('#item_5_title_link')
     }
     get referenceOnesie () {
        return $('#item_2_title_link')
     }
      get referenceRedTShirt () {
        return $('#item_3_title_link')
     }  
    get referenceBackpackPage () {
        return $('div[class="inventory_details_name large_size"]')
    }
  get clickOnAllItems () {
        return $('#inventory_sidebar_link')
     }
      get clickOnHamburgerMenu () {
        return $('#react-burger-menu-btn')
     
      }
      get clickOnAbout () {
        return $('#about_sidebar_link')
     }
        get clickOnLogout () {  
        return $('#logout_sidebar_link')
        }

}   

export default new selectors();
