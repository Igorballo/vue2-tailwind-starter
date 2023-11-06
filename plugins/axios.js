// plugins/axios.js
import axios from 'axios';
import appConfig from '../config';

const axiosInstance = axios.create({
    baseURL: appConfig.app_local ? appConfig.app_local_url : appConfig.app_live_url,
});

axiosInstance.interceptors.request.use(
    (axiosConfig) => {
        return axiosConfig;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default {
    install: (Vue) => {
        Vue.prototype.$axios = axiosInstance;
    },
};
