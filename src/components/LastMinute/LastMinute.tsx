import { useState } from 'react';
import { SliderCards } from '../../container/SliderCards';
import { DirectionCard } from '../../container/DirectionCard';
import { travels } from '../../data/travels';
import './LastMinute.scss';
import { SnackBar } from '../../container/SnackBar';

function LastMinute() {
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
		<div id='last-minute' className='last-minute'>
			<SnackBar
				text={snackBarInfo}
				position={
					snackBar
						? { right: '50px', position: 'fixed' }
						: { right: '-300px', position: 'fixed' }
				}
			/>
			<h2 className='last-minute__title'>LastMinute</h2>

			<SliderCards>
				{travels.map((direction) => {
					if (direction.lastMinute) {
						return (
							<DirectionCard
								key={direction.id}
								img={direction.img}
								hotel={direction.hotel}
								stars={direction.stars}
								country={direction.country}
								city={direction.city}
								dateStart={direction.dateStart}
								dateEnd={direction.dateEnd}
								price={direction.price}
								lastMinute={direction.lastMinute}
								airPort={direction.airPort}
								handleShowSnackBar={handleShowSnackBar}
							/>
						);
					}
				})}
			</SliderCards>
		</div>
	);
}
export default LastMinute;
