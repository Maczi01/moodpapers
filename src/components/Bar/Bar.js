import React from 'react';
import styled from "styled-components";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";
import logoIcon from '../../assets/logo.svg';
import {NavLink} from 'react-router-dom';

const BarWrapper = styled.div`
    width: 80vw;
    height: 20vh;
    background-color: ${({theme}) => theme.primary};
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`

const StyledLogoLink = styled.div`
    display: block;
    width: 67px;
    height: 67px;
    background-image: url(${logoIcon});
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 80%;
    border: none;
    //margin-bottom: 10vh;
    margin: 10px;
`;

const Bar = () => (
    <BarWrapper>
        <StyledLogoLink as={NavLink} to="/"/>
        <Button as={NavLink} to="/">main</Button>
        <Button as={NavLink} to="/fav">favourites</Button>
        {/*<SearchBar/>*/}
    </BarWrapper>
)

export default Bar;