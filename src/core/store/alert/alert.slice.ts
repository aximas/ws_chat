import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {alertProps} from '../../../components/MainComponents/Alert/Alert.props';
import {addAlert} from './alert.thunks';

const initialState: alertProps[] = [];

const alertSlice = createSlice({
    name: 'alert',
    initialState,
    reducers: {
        setAlertAction: (state, action: PayloadAction<alertProps>) => {
            const isExist = state.some(alert => alert.text === action.payload.text);
            if (!isExist) return [...state, action.payload];
        },
        removeAlertAction: (state, action: PayloadAction<string>) => {
            return state.filter(alert => alert.id !== action.payload);
        }
    },
    extraReducers: builder => {
        builder.addCase(addAlert.fulfilled, (state, action) => {
            const isExist = state.some(alert => alert.text === action.payload.text);
            if (!isExist) return [...state, action.payload];
        })
    }
})

export const {reducer: alertReducer, actions: {setAlertAction, removeAlertAction}} = alertSlice;