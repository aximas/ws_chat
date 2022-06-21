import {configureStore} from '@reduxjs/toolkit';
import {wsChatReducer} from './ws/chat/wsChat.slice';
import {authReducer} from './auth/auth.slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wsChat: wsChatReducer
    }
})