import axios from "axios";
import {store} from "app/store";


export const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
})

instance.interceptors.request.use(async (cnf) => {
    const token = await store.getState().auth.token
    if (token) {
        cnf.headers.Authorization = `Bearer ${token}`
    }
    return cnf
})

export const authAPI = {
    login(data: LoginParamsType) {
        const {remember, ...args} = data
        return instance.post('auth/login', {...args, expiresInMins: 60},);
    },
}

export type LoginParamsType = {
    username: string
    password: string
    remember: boolean
}
