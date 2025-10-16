import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostsList } from "../../slices/posts/postSlice";
import { Link } from "react-router-dom";
import * as SC from './styles';

export const Posts = () => {
    const postsList = useSelector((state) => state.posts.postsList);
    const status = useSelector((state) => state.posts.postsListStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        if (postsList.length === 0) {
            dispatch(getPostsList());  
        }
    }, [dispatch, postsList.length]);

    return (
        <SC.Wrapper>
            <h1>Посты</h1>
            <SC.Posts>
                {
                    status === 'loading' && <p>Загрузка постов...</p>
                }
                {
                    postsList.length && status === 'idle' ? 
                    postsList.map((post) => (
                        <SC.Post key={post.id}>                        
                            <SC.Link 
                                to={`/posts/${post.id}`}
                                as={Link}
                            >
                                {post.title}
                            </SC.Link>
                            <SC.Info>{post.body}</SC.Info>
                        </SC.Post>
                    ))
                    : ''
                }
            </SC.Posts>
        </SC.Wrapper>
    )
};