describe('Travel-Website', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/travel-website');
	});

	it.skip('Should open and check all links in navigation + scroll button', () => {
		cy.get('.link-destination').click();
		cy.get('.link-last-minute').click();
		cy.get('.link-about').click();
		cy.get('.link-contact').click();
		cy.get('.scroll-up').click();
	});
	it.skip('Should login on page', () => {
		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
	});
	it.skip('Should register user', () => {
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
	it.skip('Should reservation your tour and check sort travels', () => {
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
	it('Search panel testing', () => {
		const nameCountry = 'zanzibar';
		const price = '4000';
		const date = '2024-04-01';
		cy.get('input[name=country]').type(nameCountry);
		cy.get('input[type=date]').type(date);
		cy.get('input[type=range]').invoke('val', '4000').trigger('change');
		// cy.wait(2000);
		cy.get('.search-panel__button').click();
		cy.url().should(
			'include',
			`http://localhost:3000/travel-website/searchedTravels/${nameCountry}/${date}/4000`
		);
	});
	it.skip('Check best travels component', () => {
		cy.get('.icon-heart').first().click({ force: true });
		cy.wait(1000);
		cy.get('.snack-bar').should('have.css', 'right', '50px');
		cy.get('.snack-bar p').contains('You have to SignIn');

		const userEmail = 'hysiu07@gmail.com';
		const userPassword = '11111!';
		cy.get('.sign-in-link').click();
		cy.get('input[type=email]').type(`${userEmail}{enter}`);
		cy.get('input[type=password]').type(`${userPassword}{enter}`);
		cy.get('.btn-login').click();
		cy.wait(2000);

		cy.get('a.heart-icon').should('be.visible');
		cy.get('.fav-panel').click();
		cy.get('.logOut-btn').click();
	});
	it.skip('Check weather app - check default city, write own city and search, check reaction if write fail city name', () => {
		cy.get('.weather-app-component > .btn').click();
		cy.get('.city-main-panel').should('contain', 'London');
		cy.get('.switch').click();
		cy.get('.city-future-forcast-panel').should('exist');
		cy.get('.city-future-forcast-panel .weather-card').should('have.length', 5);
		cy.get('.city-forecast-panel-map').should('exist');

		const city = 'Warsaw';
		const failCityName = 'aaaa';
		cy.get('.input-city-name').type(`${city}{enter}`);
		cy.wait(2000);
		cy.get('.city-main-panel').should('contain', city);
		cy.get('.input-city-name').type(`${failCityName}{enter}`);
		cy.wait(2000);
		cy.get('.city-main-panel .error-info').should(
			'have.text',
			'City not found. Please enter it again.'
		);
		cy.get('.city-future-forcast-panel .error-info').should(
			'have.text',
			'City not found. Please enter it again.'
		);
		cy.get('.city-forecast-panel-map .error-info').should(
			'have.text',
			'City not found. Please enter it again.'
		);
		cy.get('.btn-weather-close').click();
	});

	it.skip('Check destinations path content of component', () => {
		Cypress.on('uncaught:exception', () => {
			return false;
		});
		cy.get('.link-destination').click();
		cy.wait(2000);
		cy.get(':nth-child(1) > a > .card-destination-img').click();
		cy.url().should('include', 'http://localhost:3000/destination/Marocco');
		cy.get('.selected > .carousel-destination-img').should('exist');
		cy.get('h2').should('exist');
		cy.get('h3').should('contain', 'Main Attracions');
		cy.get('.map-container').should('exist');
		cy.get('.slick-slider').should('exist');
		cy.get('.weather__content-container').should('exist');
		cy.get('.destinations').should('exist');
	});
});
