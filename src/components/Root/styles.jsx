import styled from "styled-components";

export const Wrapper = styled.div `
    max-width: 1000px;
    width: 100%;
    text-align: center;
    margin: 40px auto;
    font-family: Raleway;
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const Header = styled.div `
    position: relative;
`

export const Menu = styled.div `
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 25px;
    justify-content: center;
`

export const Link = styled.a `
    font-size: 16px;
    color: rgba(68, 68, 68, 1);
    text-decoration: none;
    font-weight: 500;

    &:hover,
    &.active {
        color: rgba(255, 142, 142, 1);
    }
`