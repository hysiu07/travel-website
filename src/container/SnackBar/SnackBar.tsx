import './SnackBar.scss';
import { MdDone } from 'react-icons/md';
type SnackBarPropsType = {
	text: string;
	position: React.CSSProperties;
};
function SnackBar({ text, position }: SnackBarPropsType) {
	return (
		<div className='snack-bar' style={position}>
			<MdDone color='green' size={25} />
			<p>{text}</p>
		</div>
	);
}
export default SnackBar;
