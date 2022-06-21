import {API} from '../../config/api';
import {store} from '../../store/store';
import {setAuthData, setLogged} from '../../store/auth/auth.slice';

export const LoginService = {
    async post(email, password) {
        try {
            const response = await fetch(API.auth.login, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({email, password})
            });

            if(!response.ok) return console.log(response.json());

            return response.json();
            // store.dispatch(setAuthData(true));
        }
        catch (e) {

        }
    }
}