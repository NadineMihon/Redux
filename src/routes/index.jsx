import { Root } from "../components/Root";
import { Counter } from '../pages/counter';
import { Posts } from "../pages/posts";
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
                path: '/posts',
                element: <Posts />
            },
            {
                path: '/users/:userId',
                element: <User />
            },
        ],
    },
];

export const appRouter = createBrowserRouter(routesConfig);