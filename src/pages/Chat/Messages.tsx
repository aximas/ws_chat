import {Message} from './Message';
import styles from './Chat.module.scss';
import {useEffect, useState} from 'react';
import {wsChannel} from './ChatPage';
import {useAppSelector} from '../../core/utils/hooks/useAppDispatch';

export const Messages = () => {
    const [messages, setMessages] = useState<any[]>([]);
    const wsChat = useAppSelector(({wsChat}) => wsChat);

    useEffect(() => {
        wsChannel.addEventListener('message', (e) => {
            console.log('twice', e);
            setMessages(prevState => [...prevState, ...JSON.parse(e.data)])
        })
    }, [])

    return <div className={styles.messages}>
        {messages?.map((message: any, i: number) => <Message messages={message} key={i}/>)}
    </div>
}