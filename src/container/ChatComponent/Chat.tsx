import { useState } from 'react';
import ChatPanel from './ChatPanel/ChatPanel';
import { BsFillChatRightDotsFill } from 'react-icons/bs';

import './Chat.scss';
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
			{
				<ChatPanel
					showPanel={showChatPanel}
					hideChatPanel={setShowChatPanel}
				/>
			}
		</div>
	);
}
export default Chat;
