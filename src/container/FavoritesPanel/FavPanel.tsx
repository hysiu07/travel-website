import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './FavPanel.scss';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
function FavPanel() {
	const userContext = useContext(UserContext);

	const [hasFavorites, setHasFavorites] = useState<boolean>(false);


	useEffect(() => {
		if (
			!userContext?.user?.bestTravels ||
			userContext.user.bestTravels.length === 0
		) {
			setHasFavorites(false);
			console.log('brak polubionych');
		} else {
			setHasFavorites(true);
			console.log('polubione');
		}
	}, [userContext]);
	return (
		<div className='fav-panel'>
			<div className='fav-panel__tooltip'>
				<p>You have {userContext?.user?.bestTravels?.length} Liked travels!</p>
			</div>
			{hasFavorites && (
				<Link to='/myAccount' className='heart-icon'>
					<AiFillHeart size={80} color='red' className='heart-icon' />
				</Link>
			)}
		</div>
	);
}
export default FavPanel;
