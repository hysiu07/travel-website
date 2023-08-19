import './Insurance.scss';
function Insurance() {
	return (
		<div className='insurance'>
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
					Click for more informations!
				</button>
			</div>
		</div>
	);
}
export default Insurance;
