import { useState } from 'react';
import Question from './Question/Question';
import MovingText from 'react-moving-text';
import imgGuide from '../../../img/guide.jpg';
import { FaArrowRightLong } from 'react-icons/fa6';
import './ChatPanel.scss';

type PropsChatPanelType = {
	showPanel: boolean;
	hideChatPanel: React.Dispatch<React.SetStateAction<boolean>>;
};
function ChatPanel({ showPanel, hideChatPanel }: PropsChatPanelType) {
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
			<div
				className='chat-panel__hide-btn'
				onClick={() => {
					hideChatPanel(false);
				}}
			>
				<FaArrowRightLong size={20} />
			</div>
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
						<Question
							setAnswerQuestion={setAnswerQuestion}
							questionText='Where can I find your office?'
							activeQuestion={activeQestion}
							answerText="You can book a tour here, but unfortunately, we don't have a physical office."
							setActiveQuestion={setActiveQuestion}
							number={1}
						/>
						<Question
							setAnswerQuestion={setAnswerQuestion}
							questionText='What last-minute offers do you have available?'
							activeQuestion={activeQestion}
							answerText='Have a look at the last-minute section.'
							setActiveQuestion={setActiveQuestion}
							number={2}
						/>
						<Question
							setAnswerQuestion={setAnswerQuestion}
							questionText='Is it possible to purchase additional insurance?'
							activeQuestion={activeQestion}
							answerText='We have 3 insurance packages: Basic, Silver, Gold. Learn more in the insurance section.'
							setActiveQuestion={setActiveQuestion}
							number={3}
						/>
						<Question
							setAnswerQuestion={setAnswerQuestion}
							questionText='What documents are required for travel?'
							activeQuestion={activeQestion}
							answerText='You have to take only your pass.'
							setActiveQuestion={setActiveQuestion}
							number={4}
						/>
						<Question
							setAnswerQuestion={setAnswerQuestion}
							questionText='Can I take pets on vacation?'
							activeQuestion={activeQestion}
							answerText='The additional fee for pets up to 15kg is $150.'
							setActiveQuestion={setActiveQuestion}
							number={5}
						/>
					</div>
				</MovingText>
			)}
		</div>
	);
}
export default ChatPanel;
