import {configureStore} from '@reduxjs/toolkit';
import {wsChatReducer} from './ws/chat/wsChat.slice';
import {authReducer} from './auth/auth.slice';
import {alertReducer} from './alert/alert.slice';

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        auth: authReducer,
        wsChat: wsChatReducer
    }
})