import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as SC from './styles';

export const Post = () => {
    const postsList = useSelector((state) => state.posts.postsList);
    const { postId } = useParams();
    const navigate = useNavigate();

    const post = postsList.find((post) => post.id === Number(postId));

    return (
        <SC.Wrapper>
            <h2>{`Пост № ${post.id}`}</h2>
            <SC.PostItem>
                <h3>{post.title}</h3>
                <SC.Info>{post.body}</SC.Info>                
            </SC.PostItem>
            <SC.Button onClick={() => navigate(`/posts/${postId}/edit`)}>Редактировать пост</SC.Button>
            <SC.Button onClick={() => navigate('/posts')}>Назад</SC.Button>
        </SC.Wrapper>
    )
};