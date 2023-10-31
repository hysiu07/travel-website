import { useEffect, useState } from 'react';
import './ScrollUpComponent.scss';
import { FiChevronUp } from 'react-icons/fi';
import { useScrollY } from '../Hooks/useScrollY';

function ScrollUpComponent() {
	const scrollY = useScrollY();
	const [showScrollBtn, setShowScrollBtn] = useState<boolean>(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		if (scrollY > 400) {
			setShowScrollBtn(true);
		} else {
			setShowScrollBtn(false);
		}
	}, [scrollY]);
	return (
		<div
			className='scroll-up'
			style={showScrollBtn ? { right: '30px' } : { right: '-300px' }}
			onClick={scrollToTop}
		>
			<FiChevronUp size={50} />
		</div>
	);
}
export default ScrollUpComponent;
