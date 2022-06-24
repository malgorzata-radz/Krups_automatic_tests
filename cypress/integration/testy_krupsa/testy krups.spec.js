/// <reference types ="cypress" />
import krupsPhrases from '../../fixtures/krupsPhrases.json'
import krupsPage from '../../Page Object/krupsPageObject';
const krups = new krupsPage();


context('Testing - Krups24.pl', () =>{
    describe('Simple tests', {tags: 'local'}, () =>{
        beforeEach('Entering http://krups24.pl page and confirming policy', () =>{
            cy.visit('www.krups24.pl');
            cy.url().should('contain', 'krups24.pl').wait(5000);
            krups.selectConfirmIframe().wait(2000).click();
           cy.get('.cookieMessage-cookieMessageBtn-1cO').click();
        }) 
        it('test 1 - search, and click first result from dropdown', () =>{
            cy.get('input[name*="search_query"]').clear().type("kawa").wait(5000);
            cy.get('.autocomplete-suggestions-3XZ').eq(0).click();
            cy.url().should('contain', 'signature-medium');
        })
        it('test 2 - search, and click enter', () =>{
            krups.selectSearchInput().as('input'); 
            cy.get('@input').clear().type("kawa").type('{enter}');
            cy.url().should('contain', 'kawa');
        })
        it(' test with fixture - search by phrase', function (){
            krups.selectSearchInput().as('input'); 
            cy.log(krupsPhrases[0].fraze);
            cy.get("@input").clear().type(krupsPhrases[0].phrase).should('have.value', krupsPhrases[0].phrase);
            cy.get("@input").clear().type(krupsPhrases[1].phrase).should('have.value', krupsPhrases[1].phrase);
            cy.get("@input").clear().type(krupsPhrases[2].phrase).should('have.value', krupsPhrases[2].phrase)
        })
        it('test 3 - Check if section Krups Poleca on main page is visible', () =>{
            cy.get('.carouselproducts-rootcontainer-3WG').should('be.visible');
        })
        it('test 4 - Check if section Bestsellers on main page is visible', () =>{
            cy.get('.carouselproducts-rootcontainer-3WG').should('be.visible');
        })
        it("test 5 - Click on product in krups poleca category", () =>{
            cy.get(':nth-child(3) > .carouselproducts-slider_products-3Vm > .slick-slider > .slick-list > .slick-track > [data-index="2"] > :nth-child(1) > .product-item > .carouselproducts-root-WCd').click();
            cy.url().should('contain','ekspres-automatyczny-krups-evidence-one-ea895n');
        })
        it('test 6 - check if price is visible', () =>{
            cy.get(':nth-child(3) > .carouselproducts-slider_products-3Vm > .slick-slider > .slick-list > .slick-track > [data-index="2"] > :nth-child(1) > .product-item > .carouselproducts-root-WCd').click();
            cy.get('.pricing-price-1nk').should('be.visible');
        })
        it('test 7 - checking links from the footer', () =>{
            cy.get('.footer-links-2wR > :nth-child(2) > :nth-child(2) > a').click();
            cy.url().should('contain', 'marka-krups');
        })
        it('test 8 - clicking link from footer', () =>{
            cy.get('.footer-links-2wR > :nth-child(2) > :nth-child(6) > a').click();
            cy.get('[style="margin: 20;"] > h1 > strong').should('be.visible');
        })
        it("test 9 - select category from menu", () =>{
            cy.get('.navTrigger-root-374 > svg').click();
            cy.get('.navigation-showCase-1yK > .categoryMachines-root-WhY > [href="/kr_pl/ekspresy-kapsulkowe-krups.html"] > .categoryMachines-title-1Hg > span').click();
            cy.url().should('contain', 'kapsulkowe');
        })
        it('test 10 - select category from top menu', () =>{
            cy.get(':nth-child(2) > .megaMenuItem-megaMenuLink-1cP').click();
            cy.url().should("contain", 'evidence');
        })
    })
})

