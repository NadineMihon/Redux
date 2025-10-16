import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-family: Raleway;
`
export const Posts = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Post = styled.div `
    display: flex;
    flex-direction: column;
`

export const Info = styled.p `
    text-align: left;
    text-indent: 2em;
    line-height: 1.7;
`

export const Link = styled.a `
    font-size: 18px;
    color: black;
    text-decoration: none;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        color: rgba(255, 142, 142, 1);
    }
`