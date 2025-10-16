import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as SC from './styles';

export const EditPost = () => {
    const postsList = useSelector((state) => state.posts.postsList);
    const dispatch = useDispatch();
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = postsList.find((post) => post.id === Number(postId));

    const [editedPostBody, setEditedPostBody] = useState(post.body);

    const handleChange = () => {
        navigate(`/posts/${post.id}`);
    };

    return (
        <SC.Post>
            <h2>{`Пост № ${post.id}`}</h2>
            <SC.TextAria
                rows={10}
                cols={32}
                value={editedPostBody}
                onChange={(e) => setEditedPostBody(e.target.value)}
            />
            <SC.Button
                onClick={() => handleChange()}
            >
                Сохранить изменения</SC.Button>           
        </SC.Post>
    )
};