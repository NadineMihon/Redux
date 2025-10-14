import React from "react";

export const Post = ({ post }) => {
    return (
        <div>
            <h2>{`Пост № ${post.id}`}</h2>
            <h3>{post.title}</h3>
        </div>

    )
};