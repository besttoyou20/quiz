import axiosInstance from '../api/axiosInstance.js';

export const getQuestionsByLevelId = async (levelId) => {
    const res = await axiosInstance.get(`/api/question/level/${levelId}`);
    return res.data;
}

export const getQuestionById = async ( id ) => {
    const res = await axiosInstance.get(`/api/question/${id}`);
    return res.data;
}

export const createQuestion = async (data) => {
    const res = await axiosInstance.post('/api/question', data);
    return res.data;
}

export const updateQuestion = async (id, data) => {
    const res = await axiosInstance.put(`/api/question/${id}`, data);
    return res.data;
}

export const deleteQuestion = async (id) => {
    const res = await axiosInstance.delete(`/api/question/${id}`);
    return res.data;
}