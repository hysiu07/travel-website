import { Dispatch, SetStateAction } from 'react';

type QuestionPropsType = {
	questionText: string;
	answerText: string;
	number: number;
	setAnswerQuestion: Dispatch<SetStateAction<string>>;
	setActiveQuestion: Dispatch<SetStateAction<number>>;
	activeQuestion: number;
};
export default function Question({
	questionText,
	answerText,
	number,
	setAnswerQuestion,
	activeQuestion,
	setActiveQuestion,
}: QuestionPropsType) {
	return (
		<div
			className={`question ${activeQuestion === number && 'active'}`}
			onClick={() => {
				setActiveQuestion(number);
				setAnswerQuestion(answerText);
			}}
		>
			<p className='question__text'>{questionText}</p>
		</div>
	);
}
