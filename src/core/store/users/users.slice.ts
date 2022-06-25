import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FriendData} from '../../../pages/Friends/Friends.props';

const initialState: FriendData = {
    items: [],
    totalCount: 0
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<FriendData>) => {
            return {...state, items: action.payload.items, totalCount: action.payload.totalCount}
        }
    }
})

export const {actions: {setUsers}, reducer: usersReducer} = usersSlice;