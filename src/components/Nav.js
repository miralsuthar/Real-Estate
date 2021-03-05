import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return (
        <NavBar>
            <Logo>
                <p>LOGO</p>
            </Logo>
            <LinksSection>
                <Links>
                    <LinkComponent>About</LinkComponent>
                    <LinkComponent>Selling</LinkComponent>
                    <LinkComponent>Buying</LinkComponent>
                    <LinkComponent>Properties</LinkComponent>
                    <LinkComponent>Contact</LinkComponent>
                </Links>
            </LinksSection>
        </NavBar>
    );
};

//Stylinng the component

const NavBar = styled.div`
    height: 10vh;
    display: flex;
    background-color: #B8B5FF;
    width: 100%;
    justify-content: space-between;
    padding: 0rem 10rem
`;

const Logo = styled.div`
    background-color: #7868E6;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0rem;
    padding: 0.7rem 1rem;
    p{
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        color: white;
    }
`;

const LinksSection = styled.div`
    height: 100%;
    width: 25%;
    margin-right: 4rem;
`;

const Links = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    list-style: none;
`;

const LinkComponent = styled.li`
    padding-left: 2rem;
    font-size: 1.2rem;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
`;



export default Nav;
