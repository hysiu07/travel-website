import { Link } from 'react-router-dom';
import './Insurance.scss';
function Insurance() {
	return (
		<div className='insurance' id='insurance'>
			<div className='insurance__shadow'>
				<div className='insurance__text-container'>
					<h3>Insurance for you!</h3>
					<p>
						We offer comprehensive travel insurance options that provide peace
						of mind in case of unforeseen events, ensuring you're covered
						throughout your journey.
					</p>
					<h4>Choose our best insurance and enjoy peaceful vacations!</h4>
				</div>
				<button className='insurance__button'>
					<Link to='/insuranceInfo'>Click for more informations!</Link>
				</button>
			</div>
		</div>
	);
}
export default Insurance;
