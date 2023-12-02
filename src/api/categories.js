import api from "./api";


export const fetchCategories = async () => {
    const response = await api.get('/auth/categories/');
    return response.data;
}