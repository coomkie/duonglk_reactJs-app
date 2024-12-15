import axios from "axios";

const API_URL = 'https://6755100536bcd1eec8527d17.mockapi.io/account';

export const loginService = async (username, password) => {
    try {
        const response = await axios.get(API_URL);
        const users = response.data;

        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            return user;
        } else {
            throw new Error('Invalid username or password');
        }
    } catch (err) {
        if (!err.message.includes('Invalid username or password')) {
            throw new Error('Failed to authenticate');
        }
        throw err;
    }
};
 