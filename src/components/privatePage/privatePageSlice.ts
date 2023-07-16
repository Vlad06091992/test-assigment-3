import {createSlice} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "utils/create-app-async-thunk";
import {privatePageAPI} from "components/privatePage/privatePageApi";
import {logout, setAppError} from "features/login/authSlice";


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
        builder.addCase(logout,(state, action)=>{
            return initialState
        })
    }
});

export const getFirstProduct = createAppAsyncThunk<StateType, void>('prvPage/getFirstProd',
    async (arg, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        try {
            let res: any = await privatePageAPI.getProduct()
            return {
                id: res.data.id,
                title: res.data.title,
                description: res.data.description,
                image: res.data.images[0]
            }
        } catch (e: any) {
            dispatch(setAppError(e.message))
            return rejectWithValue(null)
        }
    })


export const privatePageReducer = slice.reducer;
