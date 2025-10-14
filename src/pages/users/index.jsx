import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUsersList } from "../../slices/users/usersSlice";
import { Link } from "react-router-dom";
import * as SC from './styles';
 
export const Users = () => {
    const usersList = useSelector((state) => state.users.usersList);
    const status = useSelector((state) => state.users.status);

    const dispatch = useDispatch();

    return (
        <div>
            <SC.UsersSection>
                <SC.UsersList>
                    <h1>Список пользователей</h1>
                    <SC.Button onClick={() => dispatch(addUsersList())}>Показать пользователей</SC.Button>
                    <SC.Users>
                        {
                            status === 'loading' && <p>Загрузка пользователей...</p>
                        }
                        {
                            usersList.length ?
                            usersList.map((user) => ( 
                                <SC.Link 
                                    key={user.id}
                                    to={`/users/${user.id}`}
                                    as={Link}
                                >
                                    {user.name}
                                </SC.Link>
                            ))
                            : ''
                        }
                    </SC.Users> 
                </SC.UsersList>
            </SC.UsersSection>
        </div>
    )
};