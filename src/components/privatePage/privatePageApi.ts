import {instance} from "features/login/authAPI";


export const privatePageAPI = {
    getProduct() {
        return instance.get('products/1');
    },
}