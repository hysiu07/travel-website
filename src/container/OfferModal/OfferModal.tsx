import { Dispatch, SetStateAction } from 'react';
import './OfferModal.scss';
import MovingText from 'react-moving-text';
type PropsOfferModalType = {
	dateStart: string;
	dateEnd: string;
	airPort: string;
	price: number;
	country: string;
	userLogged: boolean | undefined;
	img: string;
	hotel: string;
	closeModal: Dispatch<SetStateAction<boolean>>;
};
function OfferModal({
	closeModal,
	img,
	hotel,
	dateStart,
	dateEnd,
	country,
	price,
	airPort
}: PropsOfferModalType) {
	return (
		<div
			className='offer-modal'
			onClick={() => {
				closeModal(false);
			}}
		>
			<MovingText
				type='fadeInFromBottom'
				duration='600ms'
				delay='0s'
				direction='normal'
				timing='linear'
				iteration='1'
				fillMode='none'
			>
				<div
					className='offer-modal__panel'
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					<div className='offer-modal-img-box'>
						<img src={img} alt='hotel picture' />
					</div>
					<div className='reservation-info-box'>
						<div className='title-box'>
							<h3>Your Holidays!</h3>
							<hr />
						</div>
						<div className='hotel-box'>
							<h4>Hotel: {hotel}</h4>
							<hr />
						</div>
						<div className='country-box'>
							<h4>Country: {country}</h4>
							<hr />
						</div>
						<div className='airPort-box'>
							<h4>Airport: {airPort}</h4>
							<hr />
						</div>
						<div className='date-box'>
							<h4>
								Date: {dateStart} / {dateEnd}
							</h4>
							<hr />
						</div>
						<div className='food-box'>
							<h4>Food: AllInclusive</h4>
							<hr />
						</div>
						<div className='adult-box'>
							<h4>Person: 1</h4>
							<hr />
						</div>
						<div className='insurance-box'>
							<h4>Insurance:</h4>
							<hr />
						</div>
						<h3>{price} $</h3>
						<button className='reservation-btn btn'>Reservation!</button>
					</div>
				</div>
			</MovingText>
		</div>
	);
}
export default OfferModal;
