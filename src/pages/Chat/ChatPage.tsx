import {Chat} from './Chat';
import styles from './Chat.module.scss';

export const wsChannel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const ChatPage = () => {
    return <div className={styles.chatPageContainer}>
        <Chat/>
    </div>
}

export default ChatPage;