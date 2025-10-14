import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    'posts/fetchPost',
    async (postId) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
                    .then(response => response.json())
                    .then(json => resolve(json))
                // const posts = [
                //     {
                //         id: 1,
                //         title: '1',
                //         body: '1'
                //     },
                //     {
                //         id: 2,
                //         title: '2',
                //         body: '2'
                //     },
                //     {
                //         id: 3,
                //         title: '3',
                //         body: '3'
                //     },
                //     {
                //         id: 4,
                //         title: '4',
                //         body: '4'
                //     }
                // ];

                // resolve(posts[postId - 1])
            }, 2000)
        });
    }
);

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        post: {},
        status: 'idle',
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPost.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getPost.fulfilled, (state, action) => {
                state.status = 'idle';
                state.post = action.payload;
            })
    },
});

export default postsSlice.reducer;