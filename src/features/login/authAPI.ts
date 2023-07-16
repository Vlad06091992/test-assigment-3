import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://dummyjson.com/',
})

export const authAPI = {
    login(data: LoginParamsType) {
        const {remember, ...args} = data
        return instance.post('auth/login', {...args, expiresInMins: 60}, {});
    },


}

export type LoginParamsType = {
    username: string
    password: string
    remember: boolean
}
