import { $ } from '@wdio/globals'
import pageUrl from './pageUrl.js';


class selectors extends pageUrl {
    
    get referenceheader  () {
        return $('div[class="header_label"]');
    }
}

export default new selectors();
