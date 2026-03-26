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
}

export default new selectors();
