import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {createAppAsyncThunk} from "utils/create-app-async-thunk";
import {authAPI, instance, LoginParamsType} from "features/login/authAPI";


export interface StateType {
    isLoggedIn: boolean
    status: 'idle' | 'loading' | 'failed';
    error: string | null
    token: string | null
}

const initialState: StateType = {
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
        logout() {
            return initialState
        },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.token = action.payload.token
            state.isLoggedIn = action.payload.isLoggedIn
        })
    }
});

export const login = createAppAsyncThunk<LoginReturnType, LoginParamsType>('auth/login',
    async (arg, thunkAPI) => {
        const {dispatch, rejectWithValue} = thunkAPI
        try {
            let res: any = await authAPI.login(arg)
            return {isLoggedIn: true, token: res.data.token}
        } catch (e: any) {
            dispatch(setAppError({error: e.message}))
            return rejectWithValue(null)
        }
    })

type LoginReturnType = {
    isLoggedIn:boolean
    token: null|string
}

export const {setAppError,logout} = slice.actions
export const authReducer = slice.reducer;
