import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name: "login",
    initialState: {
        login: false,
        token:"",
    },
    reducers: {
        setLogin: (state,action) => {
            state.login = true;
        },
        setToken: (state,action) => {
            state.token = action.payload
        },
        setLogout: (state,action) => {
            state.login = false;
        },
    },
});

export const { setLogin, setLogout, setToken } = loginSlice.actions;

export default loginSlice.reducer