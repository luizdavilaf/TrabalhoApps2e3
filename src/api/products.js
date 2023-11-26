import api from "./api";


export const fetchProducts = async () => {
    const response = await api.get('/auth/products/');
    return response.data;
}