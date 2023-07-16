import {instance} from "../../../src/features/login/authAPI";


export const privatePageAPI = {
    getProduct() {
        return instance.get('products/1');
    },
}