import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {WsChatState} from '../ws.types';

export const initialState: WsChatState & {newMessageCount: number} = {
    status: 3,
    messages: [],
    newMessageCount: 0,
    me: ''
}

export const wsChatSlice = createSlice({
    name: 'wsChat',
    initialState,
    reducers: {
        chatMessageReceived: (state, action:PayloadAction<any[]>) => {
            return {...state, messages: action.payload}
        }
    }
})

export const {reducer: wsChatReducer, actions: {chatMessageReceived}} = wsChatSlice;