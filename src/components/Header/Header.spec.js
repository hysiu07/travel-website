import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../configureStorePersist';
describe('check heading', () => {
	it('render heading', () => {
		render(
			<Provider store={store}>
				<MemoryRouter>
					<Header />
				</MemoryRouter>
			</Provider>
		);
		const heading = screen.getByText(/YourTrip Welcome!/i);
		expect(heading).toBeInTheDocument();
		const secondHeading = screen.getByText(/search your holiday!/i);
		expect(secondHeading).toBeInTheDocument();
	});
});
