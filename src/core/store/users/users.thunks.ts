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