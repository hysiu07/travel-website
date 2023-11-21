describe('Travel-Website', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit('http://localhost:3000/travel-website');
	});

	it('should go and check all links in navigation', () => {
		cy.get('.link-destination').click();
		cy.get('.link-last-minute').click();
		cy.get('.link-about').click();
		cy.get('.link-contact').click();
		cy.get('.scroll-up').click();
    });
    it('should go and login on page', () => {
        const userEmail = 'hysiu07@gmail.com'
        const userPassword = '11111!'
        cy.get('.sign-in-link').click();
        cy.get('input[type=email]').type(`${userEmail}{enter}`)
        cy.get('input[type=password]').type(`${userPassword}{enter}`)
        cy.get('.btn-login').click()
    })
	it('Search random vacation and check all filters', () => {
		const nameCountry = 'greece';
		cy.get('input[name=country]').type(`${nameCountry}{enter}`);
		cy.get('button[class=search-panel__button').click();
		cy.get('input[value=All-Inclusive]').click();
		cy.get('input[value=3]').click();
		cy.get('input[value=Yes]').click();
        cy.get('input[value=Poznan]').click();
        cy.get('.filter-panel-btn').click()
	});
});
