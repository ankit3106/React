import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    loading: false,
    error: null,
};

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
            state.loading = false;
            state.error = null;
        },
        addPost: (state, action) => {
            state.posts.unshift(action.payload);
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        clearPosts: (state) => {
            state.posts = [];
        }
    }
});

export const { setPosts, addPost, setLoading, setError, clearPosts } = postSlice.actions;

export default postSlice.reducer;