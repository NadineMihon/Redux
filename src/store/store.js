import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counter/counterSlice';
import usersReducer from '../slices/users/usersSlice';
import postsReducer from '../slices/posts/postSlice';
import logger from "redux-logger";
import incrementLogger from "./middleware/incrementLogger";
import incrementByAmountModifier from "./middleware/incrementByAmountModifier";

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, incrementLogger, incrementByAmountModifier),
});