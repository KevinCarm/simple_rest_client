import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
    name: "api",
    initialState: {
        body: "",
        params: [],
        headers: [],
        baseUrl: "",
    },
    reducers: {
        saveBody: (state, action) => {
            state.body = action.payload;
        },
        saveParams: (state, action) => {
            state.params = action.payload;
        },
        saveHeaders: (state, action) => {
            state.headers = action.payload;
        },
        saveBaseUrl: (state, action) => {
            state.baseUrl = action.payload;
        },
    },
});

export const apiActions = apiSlice.actions;
export default apiSlice.reducer;
