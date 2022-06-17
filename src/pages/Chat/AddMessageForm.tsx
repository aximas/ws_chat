import React, {useEffect, useState} from 'react';
import {wsChannel} from './ChatPage';
import {useAppDispatch} from '../../core/utils/hooks/useAppDispatch';
import {sendMessageChat} from '../../core/store/ws/chat/wsChat.thunks';


export const AddMessageForm: React.FC = () => {
    const [message, setMessage] = useState<string>('')
    const dispatch = useAppDispatch();

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            dispatch(sendMessageChat(message.trim()));
            setMessage('');
        }
    }



    return <form onSubmit={sendMessage}>
        <textarea onChange={(e) => setMessage(e.currentTarget.value)} value={message}/>
        <button>Add message</button>
    </form>
}