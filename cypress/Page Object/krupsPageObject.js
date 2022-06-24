class krupsPage {
    _confirmIframe = '[style="position:absolute;right:-8px;top:-8px;padding:0;background:none;border:0 solid transparent; z-index: 99999;"] > img';
    _cookiePopUp = '.cookieMessage-cookieMessageBtn-1cO';
    _searchInput = 'input[name*="search_query"]';

    selectConfirmIframe () {
        return cy.get(this._confirmIframe);
    }
    selectCookiePopUp () {
        return cy.get(this._cookiepopUp);
    }
    selectSearchInput () {
        return cy.get(this._searchInput);
    }
}
export default krupsPage;