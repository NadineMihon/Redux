import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, addUsers, removeUser } from "../../slices/users/usersSlice";
import * as SC from './styles' 
import { User } from "./components/User";

export const Users = () => {
    const usersList = useSelector((state) => state.users.usersList);
    const dispatch = useDispatch();

    const [userName, setUserName] = useState('');

    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(json => dispatch(addUsers(json)))
        }, 2000)
    }, []);

    const handleAddUser = () => {
        const newUser = {
            id: Date.now(),
            name: userName,
        };
        
        dispatch(addUser(newUser));
        setUserName('');
    };

    return (
        <div>
            <SC.UsersSection>
                <SC.UsersList>
                    <h1>Список пользователей</h1>
                    <SC.Users>
                        {
                            !usersList.length && <p>Загрузка пользователей...</p>
                        }
                        {
                            usersList.map((user) => ( 
                                <User key={user.id} user={user} /> 
                            ))
                        }
                    </SC.Users>
                </SC.UsersList>
                <SC.AddUser>
                    <input 
                        type="text"
                        placeholder="Введите имя пользователя"
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName} 
                    />
                    <button
                        aria-label="Add user"
                        onClick={() => handleAddUser()}
                    >
                        Добавить пользователя
                    </button>
                </SC.AddUser>
            </SC.UsersSection>
        </div>
    )
};