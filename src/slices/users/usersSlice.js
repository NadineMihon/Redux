import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: {
        usersList: [],
    },
    reducers: {
        addUsers: (state, action) => {
            state.usersList = action.payload;
        },
        addUser: (state, action) => {
            state.usersList = [ ...state.usersList, action.payload ];
        },
        removeUser: (state, action) => {
            state.usersList = state.usersList.filter((user) => user.id !== action.payload);
        },
    },
});

export const { addUsers, addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;