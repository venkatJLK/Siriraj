import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
    username: string;
    password: string;
}

const initialState: LoginState = {
    username: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername(state, action: PayloadAction<string>) {
            state.username = action.payload;
        },
        setPassword(state, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        clearLogin(state) {
            state.username = '';
            state.password = '';
        },
    },
});

export const { setUsername, setPassword, clearLogin } = loginSlice.actions;

export default loginSlice.reducer;