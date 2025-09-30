import axios from "axios";

// יוצרים אינסטנס מותאם
const api = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const httpGet = (url) => {
    const token = localStorage.getItem("token");
    return api
        .get(url, {
            headers: { "Authorization": `Bearer ${token} ` }
        })
        .then((response) => response.data)
        .catch((error) => {
            throw error.response?.data || { error: error.message };
        });
};

export const httpPost = (url, body) => {
    const token = localStorage.getItem("token");

    return api
        .post(url, body,{
            headers: { "Authorization": `Bearer ${token} ` }
        })
        .then(response => response.data)
        .catch(error => {
            throw error.response?.data || { error: error.message };
        });
};

