import { $ } from '@wdio/globals'
import pageUrl from './pageUrl.js';


class selectors extends pageUrl {
    
    get referenceheader  () {
        return $('div[class="header_label"]');
    }
    get referenceCartBadge () {
        return $('span[class="shopping_cart_badge"]')
    }
}

export default new selectors();
