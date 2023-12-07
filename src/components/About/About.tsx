import { useState, useEffect, useRef } from 'react';
import { BiSolidPlane, BiSolidCheckShield } from 'react-icons/bi';
import { BsMap, BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineReviews } from 'react-icons/md';
import { ImCoinDollar } from 'react-icons/im';
import MovingText from 'react-moving-text';
import './About.scss';
function About() {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [animate, setAnimate] = useState<boolean>(false);

	const isElementInViewport = (): boolean => {
		if (sectionRef.current) {
			const rect = sectionRef.current.getBoundingClientRect();
			return rect.top < 750 && rect.bottom >= 0;
		}
		return false;
	};

	useEffect(() => {
		const handleScroll = () => {
			if (isElementInViewport()) {
				setAnimate(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div id='about' className='about' ref={sectionRef}>
			<h2 className='about__title'>About</h2>
			{animate && (
				<MovingText
					type='fadeInFromBottom'
					duration='1000ms'
					delay='0s'
					direction='normal'
					timing='linear'
					iteration='1'
					fillMode='none'
				>
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
				</MovingText>
			)}
		</div>
	);
}
export default About;
