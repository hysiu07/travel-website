import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { NavLogo } from '../Nav/NavLogo';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { SnackBar } from '../../container/SnackBar';
import './Contact.scss';
import { WeatherApp } from '../../container/WeatherApp';
type PropsCategoryType = {
	title: string;
	links: string[];
};

const Category = ({ title, links }: PropsCategoryType) => {
	const navigate = useNavigate();

	const changePath = (direction: string) => {
		navigate(
			`/travel-website/searchedTravels/${direction.toLocaleLowerCase()}/2023-10-15/5000?lastMinute=Yes`
		);
	};

	return (
		<div className='category'>
			<h3>{title}</h3>
			{links.map((link, index) => {
				return (
					<div className='link-box' key={index}>
						<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
						{title === 'Partners' ? (
							<Link to={`https://www.${link}.com/`} target='_blank'>
								{link}
							</Link>
						) : (
							<p
								onClick={() => {
									changePath(link);
								}}
							>
								{link}
							</p>
						)}
					</div>
				);
			})}
		</div>
	);
};
function Contact() {
	const [disabled, setDisabled] = useState<boolean>(true);
	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [inputEmail, setInputEmail] = useState<string>('');
	const dispatch = useDispatch();

	const handleValidationEmail = (emailValue: string) => {
		if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(emailValue)) {
			setDisabled(true);
		} else {
			setDisabled(false);
		}
	};
	return (
		<div className='contact' id='contact'>
			<SnackBar
				text='Subscribe to the newsletter'
				position={
					snackBar
						? { right: '50px', top: '20px' }
						: { right: '-300px', top: '20px' }
				}
			/>

			<div className='contact__container'>
				<div className='contact__box-first'>
					<div className='contact__text'>
						<p className='litle-title'>Keep in touch</p>
						<p className='big-title'>Travel with us</p>
					</div>
					<form className='contact__form'>
						<input
							type='email'
							placeholder='Enter Email Adress'
							className='input'
							onChange={(e) => {
								handleValidationEmail(e.target.value);
								setInputEmail(e.target.value);
							}}
							value={inputEmail}
						/>
						<button
							type='submit'
							className='button'
							disabled={disabled}
							onClick={async (e) => {
								e.preventDefault();
								await setSnackBar(true);
								await setInputEmail('');
								await setDisabled(true);
								await new Promise((resolve) => {
									setTimeout(() => {
										resolve(setSnackBar(false));
									}, 3000);
								});
							}}
						>
							Send!
						</button>
					</form>
				</div>
				<div className='contact__box-second'>
					<div className='company'>
						<NavLogo />
						<div className='company-info'>
							<p>
								YourTrip Travel Agency is a renowned name in the world of travel
								and tourism. With years of experience and expertise, YourTrip
								has established itself as a trusted partner for travelers
								seeking memorable and hassle-free journeys.
							</p>
						</div>
						<div className='company-social'>
							<AiFillFacebook className='company-social__icon' />
							<AiFillInstagram className='company-social__icon' />
							<AiFillYoutube className='company-social__icon' />
						</div>
						{/* <div className='company-btn-forecast'>
							<button
								className='btn btn-weather'
								onClick={() => {
									dispatch({ type: 'weather/SHOW_FORECAST' });
								}}
							>
								Weather Forecast
							</button>
						</div> */}
						<WeatherApp />
					</div>
					<div className='categories'>
						<div className='category'>
							<h3>Our Agency</h3>
							<div className='link-box'>
								<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
								<a href='#destinations'>Destinations</a>
							</div>
							<div className='link-box'>
								<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
								<a href='#insurance'>Insurance</a>
							</div>
							<div className='link-box'>
								<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
								<a href='#reviews'>Revievs</a>
							</div>
							<div className='link-box'>
								<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
								<a href='#'>Search Travel</a>
							</div>
						</div>
						<Category
							title='Partners'
							links={[
								'Booking',
								'HostelWorld',
								'Trivago',
								'TripAdvisor',
								'AirBnb',
							]}
						/>
						<Category
							title='Last Minute'
							links={['Zanzibar', 'Greece', 'Thailand', 'Cyprus', 'Spain']}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Contact;
