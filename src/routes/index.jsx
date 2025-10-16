import { Root } from "../components/Root";
import { Counter } from '../pages/counter';
import { Posts } from "../pages/posts";
import { EditPost } from "../pages/posts/components/EditPost";
import { Post } from "../pages/posts/components/Post";
import { Users } from "../pages/users";
import { User } from "../pages/users/components/User"
import { createBrowserRouter } from "react-router-dom";

export const routesConfig = [
    {
        path: '/',
        element: <Root />,
        children: [
            {
                index: true,
                element: <Counter />
            },
            {
                path: '/users',
                element: <Users />
            },            
            {
                path: '/users/:userId',
                element: <User />
            },
            {
                path: '/posts',
                element: <Posts />
            },
            {
                path: 'posts/:postId',
                element: <Post />
            },
            {
                path: 'posts/:postId/edit',
                element: <EditPost />
            },
        ],
    },
];

export const appRouter = createBrowserRouter(routesConfig);