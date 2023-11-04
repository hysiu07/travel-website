import { useState } from 'react';
import './ChatPanel.scss';
import imgGuide from '../../../img/guide.jpg';
type PropsChatPanelType = {
	showPanel: boolean;
};
function ChatPanel({ showPanel }: PropsChatPanelType) {
	const [activeQestion, setActiveQuestion] = useState<number>(0);
	return (
		<div
			className='chat-panel'
			style={showPanel ? { right: '100px' } : { right: '-500px' }}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			<h3 className='chat-panel__heading'>Chat with Leo Guide!</h3>
			<div className='chat-panel__guide-container'>
				<div className='answers-text-box'>
					<p>Witam!</p> <img src={imgGuide} alt='' />
				</div>
			</div>
			<div className='chat-panel__questions-container'>
				<div
					className={`question ${activeQestion === 1 && 'active'}`}
					onClick={() => {
						setActiveQuestion(1);
					}}
				>
					<p className='question__text'>Where can I find your office?</p>
				</div>
				<div
					className={`question ${activeQestion === 2 && 'active'}`}
					onClick={() => {
						setActiveQuestion(2);
					}}
				>
					<p className='question__text'>
						What last-minute offers do you have available?
					</p>
				</div>
				<div
					className={`question ${activeQestion === 3 && 'active'}`}
					onClick={() => {
						setActiveQuestion(3);
					}}
				>
					<p className='question__text'>
						Is it possible to purchase additional insurance?
					</p>
				</div>
				<div
					className={`question ${activeQestion === 4 && 'active'}`}
					onClick={() => {
						setActiveQuestion(4);
					}}
				>
					<p className='question__text'>
						What documents are required for travel?
					</p>
				</div>
				<div
					className={`question ${activeQestion === 5 && 'active'}`}
					onClick={() => {
						setActiveQuestion(5);
					}}
				>
					<p className='question__text'>Can I bring pets on vacation?</p>
				</div>
			</div>
		</div>
	);
}
export default ChatPanel;
