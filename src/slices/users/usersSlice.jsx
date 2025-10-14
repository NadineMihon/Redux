import React from "react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const addUsersList = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                fetch('https://jsonplaceholder.typicode.com/users')
                    .then(response => response.json())
                    .then(json => resolve(json))
                // const mockUsers = [
                //     { id: 1, name: "Тестовый пользователь 1", email: "test1@test.com" },
                //     { id: 2, name: "Тестовый пользователь 2", email: "test2@test.com" },
                //     { id: 3, name: "Тестовый пользователь 3", email: "test3@test.com" },
                //     { id: 4, name: "Тестовый пользователь 4", email: "test4@test.com" },
                //     { id: 5, name: "Тестовый пользователь 5", email: "test5@test.com" },
                // ];
                // resolve(mockUsers);
            }, 2000)
        });
    }
);

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
        status: 'idle',
    },
    reducers: {
        editUser: (state, action) => {
            const { id, newName } = action.payload;
            const user = state.usersList.find((user) => user.id === id);
            const editUser = {...user, name: newName};
            state.usersList = state.usersList.map((user) => {
                if (user.id === id) {
                    return editUser;
                }
                return user;
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUsersList.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(addUsersList.fulfilled, (state, action) => {
                state.status = 'idle';
                state.usersList = action.payload;
            })
    },
});

export const { editUser } = usersSlice.actions;

export default usersSlice.reducer;