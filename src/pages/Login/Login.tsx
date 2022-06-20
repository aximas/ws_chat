import React from "react";
import styles from './Login.module.scss';

import {Button, FormControl, InputLabel, Input, FormHelperText} from '@mui/material';

const Login: React.FC = () => {
    return <form className={styles.loginForm}>
        <FormControl margin="normal">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input type='email' id="email" aria-describedby="email-privacy"/>
            <FormHelperText id="email-privacy">We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl margin="normal">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input type='password' id="password" aria-describedby="my-helper-text"/>
        </FormControl>
        <Button type='submit'>Submit</Button>
    </form>

}

export default Login;