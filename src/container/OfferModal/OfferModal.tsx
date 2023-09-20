import { Dispatch, SetStateAction } from 'react';
import './OfferModal.scss';
type PropsOfferModalType = {
	closeModal: Dispatch<SetStateAction<boolean>>;
};
function OfferModal({ closeModal }: PropsOfferModalType) {
	return (
        <div className='offer-modal' onClick={() => {
            closeModal(false)
        }}>
			<div className='offer-modal__container'></div>
		</div>
	);
}
export default OfferModal;
