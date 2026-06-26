import axiosInstance from '../api/axiosInstance.js';

const register = async (data) => {
    const res = await axiosInstance.post('/api/auth/register', data);
    return res.data;
};

const login = async (data) => {
    const res = await axiosInstance.post('/api/auth/login', data);
    return res.data;
};

export default{ register, login };