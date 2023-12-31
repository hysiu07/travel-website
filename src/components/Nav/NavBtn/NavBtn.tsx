import { Dispatch, SetStateAction } from 'react';
import { BiMenu } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';
import './NavBtn.scss';

type NavBtnPropsType = {
	showMenu: boolean;
	setShowMenu: Dispatch<SetStateAction<boolean>>;
};

function NavBtn({ showMenu, setShowMenu }: NavBtnPropsType) {
	return showMenu ? (
		<IoClose
			size={40}
			className='menu-btn'
			onClick={() => {
				setShowMenu(!showMenu);
			}}
		/>
	) : (
		<BiMenu
			size={40}
			className='menu-btn'
			onClick={() => {
				setShowMenu(!showMenu);
			}}
		/>
	);
}
export default NavBtn;
