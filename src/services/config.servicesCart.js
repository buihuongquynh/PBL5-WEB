import * as URLS from '../constants/constant';
import axios from 'axios';
import queryString from 'query-string';

const axiosClient = axios.create({
    baseURL: URLS.BASE_URL2,
    headers: {
        'content-type': 'application/json'
    },
    paramsSerializer: params => {
        const m = params.price_change_percentage.join('');
        const newParam = { ...params, price_change_percentage: m };
        return queryString.stringify(newParam, {
            encode: false
        });
    },
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
});
export default axiosClient;