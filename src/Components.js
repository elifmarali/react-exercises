import styled, { css } from "styled-components";

export const Title = styled.h1`
    font-size:3rem;
    font-weight:600;
    text-decoration:underline;
    color:white;
    ${props => props.theme === "dark" && css`
    background-color:#000;
    color:white;
    &:hover{
        background-color:blue
    }
    `
    }
`
