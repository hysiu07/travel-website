import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { NavLogo } from '../Nav/NavLogo';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { travels } from '../../data/travels';
import { FilteredTravelsContext } from '../../context/FilteredTravelsContext';
import './Contact.scss';
type PropsCategoryType = {
	title: string;
	links: string[];
};

const Category = ({ title, links }: PropsCategoryType) => {
	const { setFilteredTravels } = useContext(FilteredTravelsContext);

	const navigate = useNavigate();
	const changePath = () => {
		navigate('/travel-website/searchedTravels');
	};
	const filterTravel = (direction: string) => {
		const filteredTravels2 = travels.filter((travel) => {
			const countryMatch = travel.country.includes(
				direction.toLocaleLowerCase()
			);
			const directionLastMinute = travel.lastMinute === true;
			return countryMatch && directionLastMinute;
		});
		setFilteredTravels(filteredTravels2);
		localStorage.setItem('travels', JSON.stringify(filteredTravels2));
		changePath();
	};
	return (
		<div className='category'>
			<h3>{title}</h3>
			{links.map((link) => {
				return (
					<div className='link-box'>
						<MdOutlineKeyboardArrowRight className='link-box__arrow-icon' />
						{title === 'Partners' ? (
							<Link
								to={`https://www.${link}.com/`}
								target='_blank'
							>
								{link}
							</Link>
						) : (
							<p
								onClick={() => {
									filterTravel(link);
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
	return (
		<div className='contact' id='contact'>
			<div className='contact__container'>
				<div className='contact__box-first'>
					<div className='contact__text'>
						<p className='litle-title'>Keep in touch</p>
						<p className='big-title'>Travel with us</p>
					</div>
					<form action='' className='contact__form'>
						<input
							type='text'
							placeholder='Enter Email Adress'
							className='input'
						/>
						<button type='submit' className='button btn'>
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
								<a href='#'>Payment</a>
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
