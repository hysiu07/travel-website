import {  useState } from 'react';

import { travels } from '../../../data/travels';
import { TravelOfferComponent } from '../../SearchedTravels/TravelComponent';

import { connect } from 'react-redux';

import './TravelsComponents.scss';
type PropsTravelsComponentType = {
	setHiddenNav: React.Dispatch<React.SetStateAction<boolean>>;
	infoUser: any
};
function TravelsComponents({
	setHiddenNav,
	infoUser
}: PropsTravelsComponentType) {

	const userLogged = infoUser.isLoggIn
	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');


	async function handleShowSnackBar(info: string) {
		await setSnackBarInfo(info);
		await setSnackBar(true);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(setSnackBar(false));
			}, 2000);
		});
	}
	return (
		<div className='travels-component'>
			{travels.map((travel) => {
				if (Array.isArray(infoUser.bestTravels) && infoUser.bestTravels.includes(travel.hotel)) {
					return (
						<TravelOfferComponent
							key={travel.id}
							img={travel.img}
							stars={travel.stars}
							country={travel.country}
							city={travel.city}
							dateStart={travel.dateStart}
							dateEnd={travel.dateEnd}
							airPort={travel.airPort}
							price={travel.price}
							hotel={travel.hotel}
							lastMinute={travel.lastMinute}
							userLogged={userLogged}
							handleShowSnackBar={handleShowSnackBar}
							setHiddenNav={setHiddenNav}
							dinerOptions={travel.diningOptions}
						/>
					);
				}
			})}
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user
	};
};
export default connect(mapStateToProps)(TravelsComponents)
