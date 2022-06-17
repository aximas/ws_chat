import {configureStore} from '@reduxjs/toolkit';
import {wsChatReducer} from './ws/chat/wsChat.slice';

export const  store = configureStore({
    reducer: {
        wsChat: wsChatReducer
    }
})