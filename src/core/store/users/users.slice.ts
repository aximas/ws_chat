import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {UserData} from "../../../pages/Users/Users.props";

const initialState: UserData = {
    items: [],
    totalCount: 0
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<UserData>) => {
            return {...state, items: action.payload.items, totalCount: action.payload.totalCount}
        }
    }
})

export const {actions: {setUsers}, reducer: usersReducer} = usersSlice;