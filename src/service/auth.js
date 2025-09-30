
import { httpPost } from "./http"


export const register = (username, password) => {
    return httpPost(
        '/auth/register',
        { username, password },
        {}
    ).then(data => {
        if (data.token) {
            localStorage.setItem('token', data.token);
            console.log('Registration successful, token stored.');
            return data.token;
        } else {
            console.error("No token in response");
            throw new Error("No token in response");
        }

    }).catch(error => {
        console.error("Registration error:", error);
        throw error;
    });
};


export const login = (username, password) => {
    return httpPost(
        '/auth/login',
        { username, password },
        {}
    )
        .then(data => {
            if (data.token) {
                localStorage.setItem('token', data.token);
                console.log('Login successful, token stored.');
                return data.token;
            } else {
                console.error("No token in response");
                throw new Error("No token in response");
            }
        }).catch(error => {
            console.error("Login error:", error);
            throw error;
        });
};


export const logout = () => {
    return httpPost('auth/logout').then((response) => {
        localStorage.removeItem("token");
        console.log("Logged out successfully");
        return response;
    });
};
