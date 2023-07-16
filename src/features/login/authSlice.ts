import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "../../../src/utils/create-app-async-thunk";
import {authAPI, instance, LoginParamsType} from "../../../src/features/login/authAPI";


export interface CounterState {
    isLoggedIn: boolean
    status: 'idle' | 'loading' | 'failed';
    error: string | null
    token: string | null
}

const initialState: CounterState = {
    isLoggedIn: false,
    status: 'idle',
    error: null,
    token: null
};

export const slice = createSlice({
    name: 'counter',
    initialState,

    reducers: {
        setAppError(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
        logout(state) {
            state.isLoggedIn = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isLoggedIn = action.payload.isLoggedIn
        })
    }
});

export const login = createAppAsyncThunk<any, LoginParamsType>('auth/login',
    async (arg, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        try {
            let res: any = await authAPI.login(arg)
            return {isLoggedIn: true, token: res.data.token}
        } catch (e: any) {
            dispatch(setAppError({error: e.message}))
            rejectWithValue(null)
            return {isLoggedIn: false, token: null}
        }
    })



export const {setAppError,logout} = slice.actions
export const authReducer = slice.reducer;
