import axios from 'axios';

// const API_URL = "http://localhost:5000/notes";
//Menggunakan Env yang disediakan di Railway
const API_URL = process.env.REACT_APP_API_URL;

export const getNotes = (search) => {
    return axios.get(`${API_URL}?search=${search}`);
};

export const createNote = (data) => {
    return axios.post(API_URL, data);
};

export const updateNote = (id, data) => {
    return axios.put(`${API_URL}/${id}`, data);
};

export const deleteNote = (id) => {
    return axios.delete(`${API_URL}/${id}`);
};