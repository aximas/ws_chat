import React from 'react';
import {AddMessageForm} from './AddMessageForm';
import {Messages} from './Messages';

export const Chat: React.FC = () => {
    return <>
        <Messages />
        <AddMessageForm />
    </>
}