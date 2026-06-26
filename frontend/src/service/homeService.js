import axiosInstance from '../api/axiosInstance.js';

export const reviews = async (data) => {
    const res = await axiosInstance.get('/api/home/reviews', data);
    return res.data;
};

export const challenges = async (data) => {
    const res = await axiosInstance.get('/api/home/challenges', data);
    return res.data;
};