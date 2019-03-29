import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;
    justify-content:space-evenly;
`;
export const Titre = styled.h1`
    font-family: sans-serif;
    color:red;
    font-size: 100px;
`;

export const Search = styled.input`
    width:40vw;
    height: 30px;
    border-radius: 5px 0 0px 5px;
    border: none;
    padding-left: 5px;
    background: coral;
    color:white;
    font-weight:bold;
    font-size: 15px;
    &::placeholder{
        color:white;
        font-weight: bold;
        font-size: 15px;
    }
`;

export const Submit = styled.button`
    height: 32px;
    width: 150px;
    border-radius:0 5px 5px 0;
    background: white;
    border: none;
    font-size: 15px;
    font-weight: bold;
`;

export const StyledLink = styled(Link)`
    font-family: sans-serif;
    font-size: 16px;
    color: white;
    &:hover {
        font-size: 20px;
        color: grey;    
      }
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
    height: 50vh;
    margin-bottom: 10px;
`;
export const Movie = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px;
    background: red;
    padding: 20px;
    border-radius: 10px;
`;

export const Checkbox = styled.input`
    ${props => props.reverse && css`
        flex-direction: row-reverse;
    `}
`;