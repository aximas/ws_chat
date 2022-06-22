import {API} from '../../config/api';
import {store} from '../../store/store';
import {setAuthData, setLogged} from '../../store/auth/auth.slice';
import {RequestBody} from "./login.types";

export const LoginService = {
    async post(email, password) {

        const reqBody: RequestBody = {
            email,
            password,
            rememberMe: true
        }

        try {
            const response = await fetch(API.auth.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(reqBody)
            });

            if (!response.ok) return console.log(response.json());

            return response.json();
            // store.dispatch(setAuthData(true));
        } catch (e) {

        }
    }
}