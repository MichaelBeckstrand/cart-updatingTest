import { browser } from '@wdio/globals'

export default class pageUrl {
    
    open () {
        return browser.url(`https://www.saucedemo.com/`)
    }
}
