import axios from "axios";

// יוצרים אינסטנס מותאם
const api = axios.create({
    baseURL: "http://localhost:5000/api", 
    timeout: 5000, 
    headers: {
        "Content-Type": "application/json",
    },
});

export const httpGet = (url, token) => {
    return api
        .get(url, {

        })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || { error: error.message };
        });
};

export const httpPost = (url, body, config = {}) => {
    return api
        .post(url, body, config)
        .then(response => response.data)
        .catch(error => {
            throw error.response?.data || { error: error.message };
        });
};

