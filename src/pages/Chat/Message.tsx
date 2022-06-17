import styles from './Chat.module.scss'
import {ChatProps} from './Chat.props';

export const Message: React.FC<{ messages: ChatProps }> = ({messages}) => {

    const {photo, userName, userId, message} = messages;

    // const {photo, userName, userId, message}: ChatProps = {
    //     photo: 'https://i.pinimg.com/140x140_RS/c3/13/da/c313da483b4c816db51c7d7715e8c3cd.jpg',
    //     userName: 'Rava',
    //     userId: 2,
    //     message: 'Hello everyone'
    // }

    return <div>
        <img src={photo} alt="profile avatar" className={styles.profileAvatar}/>
        <h6>{userName}</h6>
        <p>{message}</p>
        <hr/>
    </div>
}