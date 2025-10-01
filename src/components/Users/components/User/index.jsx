import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../../slices/users/usersSlice";
import * as SC from './styles'

export const User = ({ user }) => {
    const dispatch = useDispatch();

    return(
        <SC.User>
            <div>{user.name}</div>
            <button
                aria-label="Remove user"
                onClick={() => dispatch(removeUser(user.id))}
            >
                Удалить пользователя
            </button>
        </SC.User>
    )
};