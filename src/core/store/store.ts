import {configureStore} from '@reduxjs/toolkit';
import {wsChatReducer} from './ws/chat/wsChat.slice';
import {authReducer} from './auth/auth.slice';
import {alertReducer} from './alert/alert.slice';
import {usersReducer} from "./users/users.slice";

export const store = configureStore({
    reducer: {
        alert: alertReducer,
        auth: authReducer,
        users: usersReducer,
        wsChat: wsChatReducer
    }
})