import './TravelsComponents.scss';
import { useContext, useState } from 'react';
import { UserContext } from '../../../context/UserContext';
import { travels } from '../../../data/travels';
import { TravelOfferComponent } from '../../SearchedTravels/TravelComponent';

function TravelsComponents() {
	const userContext = useContext(UserContext);
	const userLogged = userContext?.user?.logIn;
	const [snackBar, setSnackBar] = useState<boolean>(false);
	const [snackBarInfo, setSnackBarInfo] = useState<string>('');
	
	const bestTravels = userContext?.user?.bestTravels;


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
				if (bestTravels?.includes(travel.hotel)) {
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
						/>
					);
				}
			})}
		</div>
	);
}

export default TravelsComponents;
