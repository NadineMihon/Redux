import React from "react";
import * as SC from './styles'
import { NavLink, Outlet } from "react-router-dom";

export const Root = () => {
    return (
        <SC.Wrapper>
            <SC.Header>
                <SC.Menu>
                    <SC.Link
                        to='/'
                        as={NavLink}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Счетчик
                    </SC.Link>
                    <SC.Link
                        to='/users'
                        as={NavLink}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Пользователи
                    </SC.Link>
                    <SC.Link
                        to='/posts'
                        as={NavLink}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        Посты
                    </SC.Link>
                </SC.Menu>
            </SC.Header>
            <Outlet />
        </SC.Wrapper>
    )
};

