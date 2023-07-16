import {createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "../../../src/utils/create-app-async-thunk";
import {privatePageAPI} from "../../../src/components/privatePage/privatePageApi";


export interface StateType {
    id: number,
    title: string
    description: string
    image: string
}

const initialState: StateType = {
    id: 0,
    title: '',
    description: '',
    image: ''
};

export const slice = createSlice({
    name: 'counter',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFirstProduct.fulfilled, (state, action) => {
            return action.payload
        })
    }
});

export const getFirstProduct = createAppAsyncThunk<any, void>('prvPage/getFirstProd',
    async (arg, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        try {
            let res: any = await privatePageAPI.getProduct()
            debugger
            return {
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                image: res.data.images[0]
            }
        } catch (e: any) {
            debugger
        }
    })


export const privatePageReducer = slice.reducer;
