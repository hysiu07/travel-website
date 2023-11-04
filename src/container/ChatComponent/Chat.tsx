import { useState } from 'react';
import { BsFillChatRightDotsFill } from 'react-icons/bs';

import './Chat.scss';
import ChatPanel from './ChatPanel/ChatPanel';
function Chat() {
	const [showChatPanel, setShowChatPanel] = useState<boolean>(false);
	return (
		<div
			className='chat'
			onClick={() => {
				setShowChatPanel(!showChatPanel);
			}}
		>
			<BsFillChatRightDotsFill size={30} color='#398ab9' />
			{<ChatPanel showPanel={showChatPanel} />}
		</div>
	);
}
export default Chat;
