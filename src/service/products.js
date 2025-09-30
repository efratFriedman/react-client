import { httpGet } from "./http";

export const fetchProducts = () => {
    return httpGet(
        '/products')
        .then(data => { console.log('Products :', data); return data; })
        .catch((error) => { console.error('== Error fetching products :', error); throw error; })
};