import { httpPost } from "./http"

export const login = (username, password) => {
    return httpPost(
        '/auth/login',
        { username, password },
        {}
    )
    .then(data => {
        localStorage.setItem('token', data.token);
        console.log(data.token);
        return data.token; 
    });
};


export const logout = () => {
    const token = localStorage.getItem('token');
    if (!token) return Promise.resolve();

    return httpPost(
        '/auth/logout',
        {},
        { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(data => {
        localStorage.removeItem('token'); 
        console.log('Logged out successfully');
        return data;
    })
    .catch(err => {
        localStorage.removeItem('token'); 
        console.error('Logout failed:', err);
        throw err;
    });
};
