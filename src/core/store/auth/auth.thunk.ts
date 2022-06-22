import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginService} from '../../services/auth/login';
import {setAuthData, setLogged} from './auth.slice';

export const loginThunk = createAsyncThunk('auth/login', async (_, thunkAPI) => {

    thunkAPI.dispatch(setLogged(true));

    const res = await LoginService.get();

    if (!res) return console.log('please Login in https://social-network.samuraijs.com/');

    thunkAPI.dispatch(setAuthData(res))

});

export const authThunk = createAsyncThunk('auth/setAuth', async (_, thunkAPI) => {
    const res = await LoginService.get();

    if (res) {
        thunkAPI.dispatch(setLogged(true));
        thunkAPI.dispatch(setAuthData(res))
    }
});