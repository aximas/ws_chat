import {API} from '../../config/api';

export const Users = {
    async get(queryParams) {
        const response = await fetch(`${API.users.get}?${queryParams}`);

        if (!response.ok) return console.log(response.json());

        return response.json();
    }
}