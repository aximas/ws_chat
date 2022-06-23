import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthTypes} from './auth.types';

export const initialState: AuthTypes = {
    id: 0,
    email: '',
    login: '',
    isLogged: false,
    isLoggedFromSite: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged: (state, action: PayloadAction<boolean>) => {
            return {...state, isLogged: action.payload}
        },
        setAuthData: (state, action: PayloadAction<AuthTypes>) => {
            return {...state, ...action.payload}
        },
        setLoggedFromSite: (state, action: PayloadAction<boolean>) => {
            return {...state, isLoggedFromSite: action.payload}
        }
    }
});

export const {
    actions: {
        setLogged, setAuthData, setLoggedFromSite
    }, reducer: authReducer
} = authSlice;