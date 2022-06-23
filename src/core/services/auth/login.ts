import {API} from '../../config/api';
import {GetResponse, RequestBody} from './login.types';

export const LoginService = {
    async get() {
        const response = await fetch(API.auth.me, {
            credentials: 'include',
        });
        if (!response.ok) return console.log(response.json());

        const result: GetResponse = await response.json();
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
    },
    async delete() {
        const res = await fetch(API.auth.login, {
            method: 'DELETE'
        });

        if (!res.ok) return console.log(res.json());

        return res.json();
    }
}