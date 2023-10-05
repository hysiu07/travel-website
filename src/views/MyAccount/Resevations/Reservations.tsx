import './Reservations.scss';

function Reservations() {
	
	return (
		<div className='reservations'>
			<div className='reservations__up-comming-trips'>
				<h3>UpComming Trips:</h3>
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
