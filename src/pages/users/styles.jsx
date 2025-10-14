import styled from "styled-components";

export const UsersSection = styled.div `
    display: flex;
    flex-direction: column;
    gap: 50px;
`

export const UsersList = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`
export const Button = styled.button `
    max-width: 200px;
    width: 100%;
    padding: 7px 14px;
    margin: 0 auto 20px;
    font-family: Raleway;
    font-size: 16px;
    cursor: pointer;
`

export const Users = styled.div `
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
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
