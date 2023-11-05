import { useEffect, useState } from 'react';
import './ScrollUpComponent.scss';
import { FiChevronUp } from 'react-icons/fi';
import { useScrollY } from '../Hooks/useScrollY';

type PropsScrollUpComponentType = {
	clientHeight?: number;
	scrollTop?: () => void;
};

function ScrollUpComponent({
	clientHeight,
	scrollTop,
}: PropsScrollUpComponentType) {
	const scrollY = useScrollY();
	const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		if (clientHeight) {
			if (clientHeight < -150) {
				setShowScrollBtn(true);
			} else {
				setShowScrollBtn(false);
			}
		} else {
			if (scrollY > 350) {
				setShowScrollBtn(true);
			} else {
				setShowScrollBtn(false);
			}
		}
	}, [scrollY, clientHeight]);
	return (
		<div
			className='scroll-up'
			style={showScrollBtn ? { right: '35px' } : { right: '-300px' }}
			onClick={() => {
				if (clientHeight && scrollTop) {
					scrollTop();
				} else {
					scrollToTop();
				}
			}}
		>
			<FiChevronUp size={50} />
		</div>
	);
}
export default ScrollUpComponent;
