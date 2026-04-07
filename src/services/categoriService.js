import axios from 'axios';

const API_URL = "http://localhost:5000/categories";

export const getCategories = (search) => {
    // Gunakan ${} bukan $()
    return axios.get(`${API_URL}?search=${search}`);
};

export const createCategories = (data) => {
    return axios.post(API_URL, data);
};

export const updateCategories = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

export const deleteCategories = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};