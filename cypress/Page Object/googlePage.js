class googlePage {
    _confirmPopUpSelector = "#L2AGLb > .QS5gu";
    _cookiePopUp = ".dbsFrd";
    _searchInput = ".gLFyf";

    selectConfirmPopUp () {
        return cy.get(this._confirmPopUpSelector);
    }
    selectCookiePopUp () {
        return cy.get(this._cookiepopUp);
    }
    selectSearchInput () {
        return cy.get(this._searchInput);
    }
    typeInSearchInputWithClear ( text ) {
        return this.selectSearchInput().clear().type(text);
    }
}
export default googlePage;