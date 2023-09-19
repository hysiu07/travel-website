import './Header.scss';
import video from '../../video/video.mp4';
import { SearchPanel } from '../../container/SearchPanel';
import { FilteredTravelsContextProvider } from '../../context/FilteredTravelsContext';
import MovingText from 'react-moving-text';
function Header() {

	return (
		<header className='header'>
			<div className='header__shadow'></div>
			<video
				src={video}
				muted
				autoPlay
				loop
				className='header__video'
				typeof='video.mp4'
			>
				video
			</video>
			<div className='header__container'>
				<div className='header__content-text'>
					<MovingText
						type='fadeInFromBottom'
						duration='600ms'
						delay='0s'
						direction='normal'
						timing='linear'
						iteration='1'
						fillMode='none'
					>
						<h1>YourTrip Welcome!</h1>
						<p>Search your Holiday!</p>
					</MovingText>
				</div>
				<FilteredTravelsContextProvider>
					<MovingText
						type='fadeInFromBottom'
						duration='600ms'
						delay='0s'
						direction='normal'
						timing='linear'
						iteration='1'
						fillMode='none'
					>
						<SearchPanel />
					</MovingText>
				</FilteredTravelsContextProvider>
			</div>
		</header>
	);
}

export default Header;
