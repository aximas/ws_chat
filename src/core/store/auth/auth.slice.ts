import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthTypes} from './auth.types';

export const initialState: AuthTypes = {
    id: 0,
    email: '',
    login: '',
    isLogged: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setLogged: (state, action: PayloadAction<boolean>) => {
            return {...state, isLogged: action.payload}
        },
        setAuthData: (state, action: PayloadAction<AuthTypes>) => {
            console.log('action.payload', action.payload);
            return {...state, ...action.payload}
        }
    }
});

export const {
    actions: {
        setLogged, setAuthData
    }, reducer: authReducer
} = authSlice;