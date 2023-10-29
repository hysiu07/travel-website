import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { AiFillHeart } from 'react-icons/ai';
import './FavPanel.scss';

import { connect } from 'react-redux';
type FavPanelPropsType = {
	infoUser: any;
};

function FavPanel({ infoUser }: FavPanelPropsType) {
	
	
	const [hasFavorites, setHasFavorites] = useState<boolean>(false);
	const bestTravels = infoUser.bestTravels


	useEffect(() => {
		if ( infoUser.isLoggIn) {
			setHasFavorites(true);
		} else {
			setHasFavorites(false);
		}
	}, [infoUser.bestTravels, infoUser.isLoggIn]);

	return (
		<div className='fav-panel'>
			<div className='fav-panel__tooltip'>
				<p>You have {bestTravels.length} Liked travels!</p>
			</div>
			{hasFavorites && (
				<Link
					to='/myAccount?bestTravels=true&menuType=travels'
					className='heart-icon'
				>
					<AiFillHeart size={80} color='red' className='heart-icon' />
				</Link>
			)}
		</div>
	);
}
const mapStateToProps = (state: any) => {
	return {
		infoUser: state.userInfo.user,
	};
};
export default connect(mapStateToProps)(FavPanel);
