import axios from "axios";
import config from "../env";
import { getAuthCredentials } from "../redux/actions/actions";
import store from "../redux/store";



const http = axios.create({
    baseURL: config.API_HOST
})

http.interceptors.request.use((config: any) => {
    const authData = store.getState().auth;
    
    config.transformRequest = [
        (data: any, headers: any) => {

            headers = {
                'Authorization'    : `Bearer ${authData?.accessToken}`,
                'Accept': 'application/json',
                'Content-Type'          : 'application/json',
            }
            config.headers = headers;
            config.data = JSON.stringify(data)
            return JSON.stringify(data);
        }
    ];

    return config
})

http.interceptors.response.use((response: any) => {
    console.log(response)
    return response;
});

export default http;