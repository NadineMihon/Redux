import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser } from "../../../../slices/users/usersSlice";
import * as SC from './styles';

export const User = () => {
    const usersList = useSelector((state) => state.users.usersList);
    const dispatch = useDispatch();
    const { userId } = useParams();
    const navigate = useNavigate();

    const user = usersList.find((user) => user.id === Number(userId));

    const [editedUserName, setEditedUserName] = useState(user.name);

    const handleChanges = () => {
        dispatch(editUser({
            id: user.id,
            newName: editedUserName
        }));
        navigate('/users');
    };

    return (
        <SC.User>
            <SC.TextAria
                rows={5} 
                cols={32}
                value={editedUserName}
                onChange={(e) => setEditedUserName(e.target.value)} 
            />
            <SC.Button onClick={() => handleChanges()}>
                Сохранить изменения
            </SC.Button>
        </SC.User>
    )
};