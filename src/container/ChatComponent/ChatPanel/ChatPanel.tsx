import { useState, useEffect } from 'react';
import MovingText from 'react-moving-text';
import './ChatPanel.scss';
import imgGuide from '../../../img/guide.jpg';
type PropsChatPanelType = {
	showPanel: boolean;
};
function ChatPanel({ showPanel }: PropsChatPanelType) {
	const [activeQestion, setActiveQuestion] = useState<number>(0);
	const [answerQuestion, setAnswerQuestion] = useState<string>(
		`Hello! I'm Leo. How can I help you?`
	);
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
					{showPanel && (
						<MovingText
							type='fadeInFromRight'
							duration='2000ms'
							delay='0s'
							direction='normal'
							timing='ease'
							iteration='1'
							fillMode='none'
						>
							<p>{answerQuestion}</p>
						</MovingText>
					)}

					<img src={imgGuide} alt='' />
				</div>
			</div>
			{showPanel && (
				<MovingText
					type='fadeInFromRight'
					duration='2000ms'
					delay='0s'
					direction='normal'
					timing='ease'
					iteration='1'
					fillMode='none'
				>
					<div className='chat-panel__questions-container'>
						<div
							className={`question ${activeQestion === 1 && 'active'}`}
							onClick={() => {
								setActiveQuestion(1);
								setAnswerQuestion(
									`You can book a tour here, but unfortunately, we don't have a physical office.`
								);
							}}
						>
							<p className='question__text'>Where can I find your office?</p>
						</div>
						<div
							className={`question ${activeQestion === 2 && 'active'}`}
							onClick={() => {
								setActiveQuestion(2);
								setAnswerQuestion(`Take a look at the last-minute section.`);
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
								setAnswerQuestion(
									`We have 3 insurance packages: Basic, Silver, Gold. Learn more in the insurance section.`
								);
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
								setAnswerQuestion(`You have to take only your pass.`);
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
								setAnswerQuestion(
									`The additional fee for pets up to 15kg is $150. `
								);
							}}
						>
							<p className='question__text'>Can I take pets on vacation?</p>
						</div>
					</div>
				</MovingText>
			)}
		</div>
	);
}
export default ChatPanel;
