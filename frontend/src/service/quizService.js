import axiosInstance from '../api/axiosInstance.js';

export const getAllQuiz = async () => {
    const res = await axiosInstance.get('/api/quiz');
    return res.data;
}

export const getQuizById = async ( id ) => {
    const res = await axiosInstance.get(`/api/quiz/${id}`);
    return res.data;
}

export const createQuiz = async (data) => {
    const res = await axiosInstance.post('/api/quiz', data);
    return res.data;
}

export const updateQuiz = async (id, data) => {
    const res = await axiosInstance.put(`/api/quiz/${id}`, data);
    return res.data;
}

export const deleteQuiz = async (id) => {
    const res = await axiosInstance.delete(`/api/quiz/${id}`);
    return res.data;
}