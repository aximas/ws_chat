import {createAsyncThunk} from '@reduxjs/toolkit';
import {wsChannel} from '../../../../pages/Chat/ChatPage';

export const sendMessageChat = createAsyncThunk<void, string>(
    'wsChat/sendMessageChat',
    async message => wsChannel.send(message)
)