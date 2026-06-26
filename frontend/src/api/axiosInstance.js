import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
});

//request interceptor untuk menambahkan token ke header bearer
axiosInstance.interceptors.request.use((config) => {
    //ambil token dari localStorage
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

//response Intercpetors untuk menangani error global
axiosInstance.interceptors.response.use(
    (response) => response, (error) => {
        if(error.response && error.response.status === 401){
            //jika error 401, hapus token dan redirect logout atau ke halaman login
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    });

export default axiosInstance;