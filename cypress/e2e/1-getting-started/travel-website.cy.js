describe('Travel-Website', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit('http://localhost:3000/travel-website');
	});

	it.skip('should go and check all links in navigation', () => {
		cy.get('.link-destination').click();
		cy.get('.link-last-minute').click();
		cy.get('.link-about').click();
		cy.get('.link-contact').click();
		cy.get('.scroll-up').click();
	});
	it.skip('should login on page', () => {
		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
	});
	it.skip('should register user', () => {
		const userName = 'DanielHys';
		const userEmail = 'hysiu07@gmail.com';
		const userPass = '11111!';

		cy.get('.sign-in-link').click();
		cy.get('.btn-register').click();
		cy.get('input[name=name]').type(`${userName}{enter}`);
		cy.get('input[name=email]').type(`${userEmail}{enter}`);
		cy.get('input[name=password]').type(`${userPass}{enter}`);
		cy.get('input[name=confirmPassword]').type(`${userPass}{enter}`);
		cy.get('input[type=checkbox]').click();
		cy.get('.btn-register').click();
	});
	it.skip('Search random vacation and check all filters', () => {
		const nameCountry = 'greece';
		cy.get('input[name=country]').type(`${nameCountry}{enter}`);
		cy.get('button[class=search-panel__button').click();
		cy.get('input[value=All-Inclusive]').click();
		cy.get('input[value=3]').click();
		cy.get('input[value=Yes]').click();
		cy.get('input[value=Krakow]').click();
		cy.get('.filter-panel-btn').click();
	});
	it('Should take a reservation your tour and sort travels', () => {
		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
		cy.wait(  6000 );

		cy.get('.search-panel__button').click();
		cy.get('select[name=sort-travels]').select('priceHightToLow');
		// cy.get('.searched-travels__filtered-travels')
		// 	.find('.show-offer-btn')
		// 	.click();
		cy.get(':nth-child(2) > .travel-offer__asside-info > .show-offer-btn').click()
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.adult-box h4').should('have.text', 'Person: 4')
		cy.get('select[name=insurance]').select('Silver', { force: true });
		cy.get('.reservation-btn').click({ force: true });
	});
});
