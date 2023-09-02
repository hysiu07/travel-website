import './CountryInfo.scss';
import { TiTick } from 'react-icons/ti';

type PropsCountryInfoType = {
	img: string;
	country: string;
	info: string;
	attractions: string[];
};
function CountryInfo({
	img,
	country,
	info,
	attractions,
}: PropsCountryInfoType) {
	return (
		<div className='country-info'>
			<div
				className='country-info__img'
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className='country-info__text-container'>
				<h2>{country}</h2>
				<p className='text-info'>{info}</p>
				<div className=' country-info__attractions'>
					<h3>Main Attracions:</h3>
					{attractions.map((attraction) => {
						return (
							<div className='attractions-box'>
								<div>
									<TiTick size={30} />
								</div>
								<div>
									<p>{attraction}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default CountryInfo;
