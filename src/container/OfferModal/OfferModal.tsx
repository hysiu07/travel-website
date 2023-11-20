import { useEffect, useState, useContext } from 'react';
import { Dispatch, SetStateAction } from 'react';

import { IoClose } from 'react-icons/io5';
import MovingText from 'react-moving-text';
import { ThreeCircles } from 'react-loader-spinner';
import useWindowWidth from '../../container/Hooks/useWindowWidth';
import { SnackBar } from '../SnackBar';

import { connect } from 'react-redux';
import { addReservation } from '../../redux/reduxUserInfo';

import './OfferModal.scss';

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
	setHiddenNav?: Dispatch<SetStateAction<boolean>>;
	setReservation: any;
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
	setHiddenNav,
	setReservation,
}: PropsOfferModalType) {
	const { width } = useWindowWidth();

	const [countPerson, setCountPerson] = useState(1);
	const [insurancetype, setInsuranceType] = useState<
		'Basic' | 'Silver' | 'Gold'
	>('Basic');
	const [priceInsurance, setPriceInsurance] = useState<number>(0);
	const [showLoader, setShowLoader] = useState<boolean>(false);
	const [showSnackBar, setShowSnackBar] = useState<boolean>(false);

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
	async function handleAddReservation() {
		await setShowLoader(!showLoader);

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
				setShowLoader(false);
			}, 3000);
		});
		await setShowSnackBar(true);
		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
				setShowSnackBar(false);
			}, 3000);
		});
	}

	return (
		<div
			className='offer-modal'
			onClick={() => {
				closeModal(false);
				if (setHiddenNav) {
					setHiddenNav(false);
				}
			}}
		>
			<SnackBar
				text='Added your Reservation!'
				position={showSnackBar ? { right: '50px' } : { right: '-300px' }}
			/>
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
					<div
						className='close-btn'
						onClick={() => {
							closeModal(false);
							if (setHiddenNav) {
								setHiddenNav(false);
							}
						}}
					>
						X
					</div>
					<div className='offer-modal-img-box'>
						<img src={img} alt='hotel picture' />
						{width < 576 && (
							<IoClose
								size={40}
								className='close-btn'
								onClick={() => {
									closeModal(false);
									if (setHiddenNav) {
										setHiddenNav(false);
									}
								}}
							/>
						)}
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
						<div className='price-box'>
							<h3>{price * countPerson} $</h3>
							{priceInsurance !== 0 && (
								<h4>+Insurance {priceInsurance * countPerson}$</h4>
							)}
						</div>

						<button
							className='reservation-btn'
							onClick={() => {
								handleAddReservation();
								setReservation({
									travel: hotel,
									country: country,
									airPort: airPort,
									price: price * countPerson,
									insurance: insurancetype,
									insurancePrice: priceInsurance * countPerson,
									dateEnd: dateEnd,
									dateStart: dateStart,
									food: 'AllInclusive',
									amountPersons: countPerson,
								});
							}}
						>
							{showLoader ? (
								<ThreeCircles
									height='30'
									width='30'
									color='#398AB9'
									wrapperStyle={{}}
									visible={true}
									ariaLabel='three-circles-rotating'
								/>
							) : (
								'Reservation!'
							)}
						</button>
					</div>
				</div>
			</MovingText>
		</div>
	);
}

const mapDispatchToProps = (dispatch: any) => {
	return {
		setReservation: (reservation: any) => {
			dispatch(addReservation(reservation));
		},
	};
};
export default connect(null, mapDispatchToProps)(OfferModal);
