import axiosInstance from '../api/axiosInstance.js';


export const getLevelByQuizId = async (quizId) => {
    const res = await axiosInstance.get(`/api/levels/${quizId}`);
    return res.data;
}

export const createLevel = async (data) => {
    const res = await axiosInstance.post('/api/levels', data);
    return res.data;
}

export const updateLevel = async (id, data) => {
    const res = await axiosInstance.put(`/api/levels/${id}`, data);
    return res.data;
}

export const deleteLevel = async (id) => {
    const res = await axiosInstance.delete(`/api/levels/${id}`);
    return res.data;
}