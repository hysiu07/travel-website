import { Nav } from '../../components';
import './InsuranceInfo.scss';
function InsuranceInfo() {
	return (
		<div className='insurance-info'>
			<div className='insurance-info__shadow'></div>
			<Nav />
			<div className='insurance-info__panel'>
				<div className='insurance-basic insurance-card'>
					<h3>Basic</h3>
					<hr />
					<p>
						Emergency medical insurance for sudden illness or accidents abroad:
						up to $10,000
					</p>
					<hr />
					<p>Baggage insurance: up to $1,000</p>
					<hr />
					<p>Trip cancellation insurance: up to $500</p>
				</div>
				<div className='insurance-gold insurance-card'>
					<h3>Gold</h3>
					<hr />
					<p>
						Emergency medical insurance for sudden illness or accidents abroad:
						up to $30,000
					</p>
					<hr />
					<p>Baggage insurance: up to $3,000</p>
					<hr />
					<p>Trip cancellation insurance: up to $2,000</p>
					<hr />
					<p>Coverage for delayed or lost baggage: up to $1,000</p>
					<hr />
					<p>
						Coverage for the breakdown of travel equipment (e.g., laptop or
						camera): up to $500
					</p>
				</div>
				<div className='insurance-silver insurance-card'>
					<h3>Silver</h3>
					<hr />
					<p>
						Emergency medical insurance for sudden illness or accidents abroad:
						up to $20,000
					</p>
					<hr />
					<p>Baggage insurance: up to $2,000</p>
					<hr />
					<p>Trip cancellation insurance: up to $1,000</p>
					<hr />
					<p>Coverage for delayed or lost baggage: up to $500</p>
				</div>
			</div>
		</div>
	);
}
export default InsuranceInfo;
