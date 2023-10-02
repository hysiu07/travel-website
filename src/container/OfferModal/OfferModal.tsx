import { useEffect, useState } from 'react';
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
	airPort,
}: PropsOfferModalType) {
	const [countPerson, setCountPerson] = useState(1);
	const [insurancetype, setInsuranceType] = useState<
		'Basic' | 'Silver' | 'Gold'
	>('Basic');
	const [priceInsurance, setPriceInsurance] = useState<number>(0);

	const firstLetter = country.charAt(0).toUpperCase();
	const restOfLetters = country.slice(1);
	const formatedTravelCountry = firstLetter + restOfLetters;
	useEffect(() => {
		if (insurancetype === 'Basic') {
			setPriceInsurance(0);
		} else if (insurancetype === 'Silver') {
			setPriceInsurance(100);
		} else {
			setPriceInsurance(200);
		}
	}, [insurancetype]);
	const handleChangeCountPerson = (newValue: number) => {
		const minNumber = 1;
		const maxNumber = 6;

		if (newValue >= minNumber && newValue <= maxNumber) {
			setCountPerson(newValue);
		} else if (newValue < minNumber) {
			setCountPerson(minNumber);
		} else {
			setCountPerson(maxNumber);
		}
	};

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
							<h4>Country: {formatedTravelCountry}</h4>
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
							<div>
								<h4>Person: {countPerson}</h4>
								<div className='count-adults-btns'>
									<button
										className='add-person-btn'
										onClick={() => {
											handleChangeCountPerson(countPerson + 1);
										}}
									>
										+
									</button>
									<button
										className='sub-person-btn'
										onClick={() => {
											handleChangeCountPerson(countPerson - 1);
										}}
									>
										-
									</button>
								</div>
							</div>

							<hr />
						</div>
						<div className='insurance-box'>
							<div>
								<h4>Insurance: {insurancetype}</h4>
								<select
									name='insurance'
									id='insurance'
									className='insurance-select'
									onChange={(e) => {
										setInsuranceType(
											e.target.value as 'Basic' | 'Silver' | 'Gold'
										);
									}}
								>
									<option value='Basic'>Basic</option>
									<option value='Silver'>Silver</option>
									<option value='Gold'>Gold</option>
								</select>
							</div>

							<hr />
						</div>
						<h3>{price * countPerson} $</h3>
						{priceInsurance !== 0 && (
							<h4>+Insurance {priceInsurance * countPerson}$</h4>
						)}

						<button className='reservation-btn btn'>Reservation!</button>
					</div>
				</div>
			</MovingText>
		</div>
	);
}
export default OfferModal;
