describe('Travel-Website', () => {
	beforeEach(() => {
		// Cypress starts out with a blank slate for each test
		// so we must tell it to visit our website with the `cy.visit()` command.
		// Since we want to visit the same URL at the start of all our tests,
		// we include it in our beforeEach function so that it runs before each test
		cy.visit('http://localhost:3000/travel-website');
	});

	it.skip('should open and check all links in navigation + scroll button', () => {
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
	it.skip('Should reservation your tour and sort travels', () => {
		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
		cy.wait(6000);

		cy.get('.search-panel__button').click();
		cy.get('select[name=sort-travels]').select('priceHightToLow');

		cy.get(
			':nth-child(2) > .travel-offer__asside-info > .show-offer-btn'
		).click();
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.add-person-btn').click({ force: true });
		cy.get('.adult-box h4').should('have.text', 'Person: 4');
		cy.get('select[name=insurance]').select('Silver', { force: true });
		cy.get('.reservation-btn').click({ force: true });
		cy.get('.close-btn').click();
		cy.get('[href="/myAccount?menuType=desktop"]').click();
		cy.contains('.menu-item', 'Reservations').click();
		cy.contains('No Reservation').should('not.exist');
		cy.get('.logOut-btn').click();
	});
	it.skip('Test chat', () => {
		cy.get('.chat').click();
		cy.get('.chat-panel__questions-container').each(($element) => {
			cy.wrap($element).should('contain', 'Where can I find your office?');
			cy.wrap($element).should(
				'contain',
				'What last-minute offers do you have available?'
			);
			cy.wrap($element).should(
				'contain',
				'Is it possible to purchase additional insurance?'
			);
			cy.wrap($element).should(
				'contain',
				'What documents are required for travel?'
			);
			cy.wrap($element).should('contain', 'Can I take pets on vacation?');
		});
		cy.contains('p', 'Where can I find your office?').click();
		cy.contains('p', 'What last-minute offers do you have available?').click();
		cy.contains(
			'p',
			'Is it possible to purchase additional insurance?'
		).click();
		cy.contains('p', 'What documents are required for travel?').click();
		cy.contains('p', 'Can I take pets on vacation?').click();
		cy.get('.chat').click();
	});
	it.skip('Search panel testing', () => {
		const nameCountry = 'zanzibar';
		const price = '4000';
		const date = '2023-11-25';
		cy.get('input[name=country]').type(`${nameCountry}{enter}`);
		cy.get('input[type=date]').type(date);
		cy.get('input[type=range]').invoke('val', price).trigger('input');
		cy.visit(
			`http://localhost:3000/travel-website/searchedTravels/${nameCountry}/${date}/${price}`
		);
	});
	it('Check best travels', () => {
		// cy.get('.slick-list').each($element => {
		// 	cy.get('')
		// })
		cy.get('.icon-heart').first().click({ force: true });
		cy.wait(1000);
		cy.get('.snack-bar').should('have.css', 'right', '50px');
		cy.get('.snack-bar p').contains('You have to SignIn');

		// login
		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
		cy.wait(2000);

		cy.get('a.heart-icon').should('be.visible');
		// cy.get('.fav-panel').click();
	});
});
