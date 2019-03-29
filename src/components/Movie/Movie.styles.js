import styled from '@emotion/styled';
import { css } from '@emotion/core';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content:space-evenly;
    ${props => props.row && css`
        flex-direction: row;
        justify-content: space-around;
    `}
    ${props => props.start && css`
        align-items: flex-start;
        justify-content: center;
    `}
`;

export const Text = styled.p`
    color:white;
    font-family: sans-serif;
    font-size: 18px;
`;

export const Titre = styled.h1`
    font-family: sans-serif;
    color:red;
    font-size: 100px;
    ${props => props.h2 && css`
        font-size: 60px;
        color: white;
    `}
`;

export const List = styled.ul`
    font-size: 16px;
    display: flex;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
    justify-content:center;
    align-items: center;
`;
export const Poster = styled.img`
    margin-bottom: 10px;
    width:400px;
    height: auto;
    margin-right: 30px;
`;
export const Movie = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    background: red;
    width:80vw;
    padding: 20px;
    border-radius: 10px;
`;