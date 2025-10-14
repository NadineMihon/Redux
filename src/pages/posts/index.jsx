import React, { useState } from "react";
import * as SC from './styles'
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../../slices/posts/postSlice";

export const Posts = () => {
    const post = useSelector((state) => state.posts.post);
    const status = useSelector((state) => state.posts.status);

    const dispatch = useDispatch();

    const [postId, setPostId] = useState(0);

    const handlePost = () => {
        if (postId) {
            dispatch(getPost(postId));
            setPostId(0);
        }
    };

    return (
        <SC.Wrapper>
            <h1>Посты</h1>
            <SC.Form>
                <input
                    value={postId || ''} 
                    type="number" 
                    placeholder="Введите номер id" 
                    onChange={(e) => setPostId(Number(e.target.value))}
                />
                <SC.Button onClick={() => handlePost()}>Получить пост</SC.Button>
            </SC.Form>
            <SC.Post>
                {
                    status === 'loading' && <p>Загрузка поста...</p>
                }
                {
                    post.id ?
                    <div>
                        <h2>{`Пост №${post.id}`}</h2>
                        <h3>{post.title}</h3>
                        <SC.Body>{post.body}</SC.Body>
                    </div>
                    : ''
                }
            </SC.Post>
        </SC.Wrapper>
    )
};