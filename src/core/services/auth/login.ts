import {API} from '../../config/api';
import {RequestBody} from './login.types';

export const LoginService = {
    async get() {
        const response = await fetch(API.auth.me, {
            credentials: 'include',
        });
        console.log('res', response);
        if (!response.ok) return console.log(response.json());

        const result: {
            resultCode: number
            messages: [],
            data: {
                id: number,
                email: string,
                login: string
            }
        } = await response.json();
        console.log('result', result);
        if (result.resultCode === 0) return result.data
    },
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
        } catch (e) {
            console.log(e.name);
        }
    }
}