import './Header.scss';
import video from '../../video/video.mp4';

function Header() {
	return (
		<header className='header'>
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
					<h1>YourTravel Welcome!</h1>
					<p>Search your Holiday!</p>
				</div>
				<div className='header__search-panel'></div>
			</div>
		</header>
	);
}

export default Header;
