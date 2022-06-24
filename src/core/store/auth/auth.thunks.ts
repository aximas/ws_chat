import {createAsyncThunk} from '@reduxjs/toolkit';
import {LoginService} from '../../services/auth/login';
import {setAuthData, setLogged, setLoggedFromSite} from './auth.slice';
import {addAlert} from '../alert/alert.thunks';

export const loginThunk = createAsyncThunk('auth/login', async (_, thunkAPI) => {
    thunkAPI.dispatch(setLogged(true));
});

export const authThunks = createAsyncThunk<void, { isReqFromHeader: boolean }>(
    'auth/setAuth',
    async (payload, thunkAPI) => {

        const res = await LoginService.get();

        if (payload.isReqFromHeader) {
            if (res) {
                thunkAPI.dispatch(setLoggedFromSite(true));
                thunkAPI.dispatch(setLogged(true));
                thunkAPI.dispatch(setAuthData(res));
            }
        } else {
            if (res) {
                thunkAPI.dispatch(setLoggedFromSite(true));
                thunkAPI.dispatch(setLogged(true));
                thunkAPI.dispatch(setAuthData(res));
            } else {
                thunkAPI.dispatch(addAlert({
                    text: `For full login please do login in <a href="https://social-network.samuraijs.com" target="_blank" rel='noopener noreferrer'>this site</a>`,
                    type: 'info',
                    isSubmit: true
                }));
            }
        }


    });

export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    const res = await LoginService.delete();

    if (res.resultCode === 0) {
        thunkAPI.dispatch(setLoggedFromSite(false));
        thunkAPI.dispatch(setLogged(false));
        thunkAPI.dispatch(setAuthData({
            id: 0,
            email: '',
            login: ''
        }));
    }
})