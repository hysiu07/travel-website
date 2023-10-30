import { connect } from 'react-redux';
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

type PropsReservationType = {
	reservation: ReservationObjectType | undefined;
};
function Reservations({ reservation }: PropsReservationType) {
	const formatCountryName = (country: string) => {
		return country.charAt(0).toUpperCase() + country.slice(1).toLowerCase();
	};

	return (
		<div className='reservations'>
			<div className='reservations__up-comming-trips'>
				<h3>UpComming Trips:</h3>
				{reservation ? (
					<div className='container'>
						<p>Hotel: {reservation.travel}</p>
						<hr />
						<p>Country: {formatCountryName(reservation.country)}</p>
						<hr />
						<p>AirPort: {reservation.airPort}</p>
						<hr />
						<p>
							{reservation.dateStart}/{reservation.dateEnd}
						</p>
						<hr />
						<p>Insurance: {reservation.insurance}</p>
						<hr />
						<p>Food: {reservation.food}</p>
						<hr />
						<p>Number of people: {reservation.amountPersons}</p>
						<hr />
						<p>Price Insurance: {reservation.insurancePrice}$</p>
						<hr />
						<p>Price: {reservation.price}$</p>
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
const mapStateToProps = (state: any) => {
	return {
		reservation: state.userInfo.user.reservation,
	};
};
export default connect(mapStateToProps)(Reservations);
