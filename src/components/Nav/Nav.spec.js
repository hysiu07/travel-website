import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../configureStorePersist';
describe('nav check', () => {
	it.skip('dsds', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Nav />
				</MemoryRouter>
			</Provider>
		);
		const navigationElement = screen.getByRole('navigation');

		// Oczekuj, że element nawigacyjny istnieje w nawigacji
		expect(navigationElement).toBeInTheDocument();
	});
});
