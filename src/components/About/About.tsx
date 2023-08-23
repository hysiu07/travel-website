import { BiSolidPlane, BiSolidCheckShield } from 'react-icons/bi';
import { BsMap, BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineReviews } from 'react-icons/md';
import { ImCoinDollar } from 'react-icons/im';
import './About.scss';
function About() {
	return (
		<div id='about' className='about'>
			<h2 className='about__title'>About</h2>
			<div className='about__items-container'>
				<div className='about__item'>
					<BiSolidPlane size={35} />
					<p className='title'>Experience and Knowledge</p>
				</div>
				<div className='about__item'>
					<BsMap size={35} />
					<p className='title'>Wide Range of Destinations</p>
				</div>
				<div className='about__item'>
					<BsFillTelephoneFill size={35} />
					<p className='title'>24/7 Support</p>
				</div>
				<div className='about__item'>
					<MdOutlineReviews size={35} />
					<p className='title'>Reviews and Recommendations</p>
				</div>
				<div className='about__item'>
					<BiSolidCheckShield size={35} />
					<p className='title'>Comprehensive Travel Insurance</p>
				</div>
				<div className='about__item'>
					<ImCoinDollar size={35} />
					<p className='title'>Competitive Pricing</p>
				</div>
			</div>
		</div>
	);
}
export default About;
