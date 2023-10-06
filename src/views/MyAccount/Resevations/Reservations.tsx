import { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import './Reservations.scss';
type ReservationObjectType = {
	travel: string;
	country: string;
	airPort: string;
	price: number;
	insurance: string;
	insurancePrice: number;
	dateEnd: string;
	dateStart: string;
	food: string;
	amountPersons: number;
};
function Reservations() {
	const userContext = useContext(UserContext);

	const [userReservation, setUserReservation] =
		useState<ReservationObjectType | null>(null);

	useEffect(() => {
		if (userContext?.user?.reservation) {
			setUserReservation(userContext?.user?.reservation);
		}
	}, []);
	const formatCountryName = (country: string) => {
		return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
	};

	return (
		<div className='reservations'>
			<div className='reservations__up-comming-trips'>
				<h3>UpComming Trips:</h3>
				{userReservation ? (
					<div className='container'>
						<p>Hotel: {userReservation?.travel}</p>
						<hr />
						<p>Country: {formatCountryName(userReservation.country)}</p>
						<hr />
						<p>AirPort: {userReservation?.airPort}</p>
						<hr />
						<p>
							{userReservation?.dateStart}/{userReservation?.dateEnd}
						</p>
						<hr />
						<p>Insurance: {userReservation?.insurance}</p>
						<hr />
						<p>Food: {userReservation?.food}</p>
						<hr />
						<p>Number of people: {userReservation?.amountPersons}</p>
						<hr />
						<p>Price Insurance: {userReservation?.insurancePrice}$</p>
						<hr />
						<p>Price: {userReservation?.price}$</p>
					</div>
				) : (
					<div className='container'>
						<p>No Reservation</p>
					</div>
				)}
			</div>
			<div className='reservations__previous-trips'>
				<h3>Previous Trips:</h3>
				<p>
					Have you not been anywhere yet? It's time to change that! Find your
					dream vacation with us!
				</p>
			</div>
		</div>
	);
}
export default Reservations;
