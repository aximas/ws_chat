import {API} from '../../config/api';

export const Users = {
    async get(queryParams) {
        const response = await fetch(`${API.users.get}?${queryParams}`, {credentials: 'include'});

        if (!response.ok) return console.log(response);

        return response.json();
    },
    async follow(userId) {
        const response = await fetch(`${API.users.follow}/${userId}`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'API-KEY': 'f55235a4-2de6-4ed8-8d44-6d4f47e4c38a'
            }
        });

        if (!response.ok) return console.log(response.json());

        return response.json();
    },
    async unFollow(userId) {
        const response = await fetch(`${API.users.follow}/${userId}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: {
                'API-KEY': 'f55235a4-2de6-4ed8-8d44-6d4f47e4c38a'
            }
        });

        if (!response.ok) return console.log(response.json());

        return response.json();
    }
}