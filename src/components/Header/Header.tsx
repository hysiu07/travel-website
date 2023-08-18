import './Header.scss';
// import video from '../../video/video.mp4';

function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__content-text'>
					<h1>YourTravel Welcome!</h1>
					<p>Search your Holiday!</p>
				</div>
				{/* <video src={video} muted autoPlay loop className='header__video'>
					video<div className='header__shadow'></div>
				</video> */}
				<div className='header__search-panel'></div>
			</div>
		</header>
	);
}

export default Header;
