import './Header.scss';

function Header() {
	return (
		<header className='header'>
			<div className='header__container'>
				<div className='header__content-text'>
					<h1>YourTravel Welcome!</h1>
					<p>Search your Holiday!</p>
				</div>
				<video src='' className='header__video'>
					video
				</video>
				<div className='header__search-panel'></div>
			</div>
		</header>
	);
}

export default Header;
