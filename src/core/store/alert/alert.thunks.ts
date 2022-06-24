import {createAsyncThunk} from '@reduxjs/toolkit';
import {alertProps} from '../../../components/MainComponents/Alert/Alert.props';
import {removeAlertAction} from './alert.slice';

export const addAlert = createAsyncThunk<alertProps, Omit<alertProps, 'id'>>(
    'alert/createAlert',
    async (payload, thunkAPI) => {
        const id = Date.now().toString();

        if (!payload.isSubmit) {
            let timeout = 2000;
            let wordsCount = payload.text.split(' ').length

            if (wordsCount > 3) {
                const x = Math.ceil(wordsCount / 3);
                timeout = x * 1000;
            }

            setTimeout(() => {
                thunkAPI.dispatch(removeAlertAction(id))
            }, timeout);

        }
        return {...payload, id}
    }
);