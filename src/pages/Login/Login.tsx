import React, {useState} from 'react';
import styles from './Login.module.scss';

import {Button, FormControl, InputLabel, Input, FormHelperText} from '@mui/material';
import {LoginService} from '../../core/services/auth/login';
import {authThunks, loginThunk} from '../../core/store/auth/auth.thunks';
import {useAppDispatch} from '../../core/utils/hooks/useAppDispatch';
import {addAlert} from '../../core/store/alert/alert.thunks';


const Login: React.FC = () => {
    // React hooks
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const dispatch = useAppDispatch();

    // Handlers
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const loginResponse = await LoginService.post(email, password);

        if (loginResponse.resultCode === 0) {
            await dispatch(loginThunk());
            await dispatch(authThunks({isReqFromHeader: false}));
        } else {
            dispatch(addAlert({
                text: `${loginResponse.messages.length ? loginResponse.messages.join(' ') : 'something working wrong'}`,
                type: 'info',
            }));
        }
    }

    return <form className={styles.loginForm} onSubmit={onSubmitHandler}>
        <FormControl margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input type="email" id="email" aria-describedby="email-privacy" onChange={(e) => setEmail(e.target.value)}
                   value={email}/>
            <FormHelperText id="email-privacy">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type="password" id="password" autoComplete="on" onChange={(e) => setPassword(e.target.value)}
                   value={password}/>
        </FormControl>
        <Button type="submit">Submit</Button>
    </form>

}

export default Login;