import {createAsyncThunk} from "@reduxjs/toolkit";
import {Users} from "../../services/users/users";
import {setUsers} from "./users.slice";

export const usersThunk = createAsyncThunk<void, { queryParams: string | null }>(
    'users/setUsers',
    async (payload, thunkAPI) => {
        const response = await Users.get(payload.queryParams);

        if (response.error) return console.log('You have error in process get users', response.error);
        thunkAPI.dispatch(setUsers({items: response.items, totalCount: response.totalCount}));
    }
);

export const userFollowThunk = createAsyncThunk<void, {
    queryParams: string | null,
    userId: number,
    followToggle?: 'follow' | 'unFollow'
}>(
    'user/setUserFollow',
    async (payload, thunkAPI) => {
        let _response;

        if(payload.followToggle === 'follow') _response = await Users.follow(payload.userId);
        else _response = await Users.unFollow(payload.userId);

        if (_response.fieldsErrors.length) return console.log('You have error in process user follow/unFollow toggle', _response.messages.join(' '));

        thunkAPI.dispatch(usersThunk({queryParams: payload.queryParams}));
    });