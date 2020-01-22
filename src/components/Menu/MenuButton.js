import React from 'react'
import styled from 'styled-components'

const StyledMenuButton = styled.button`
    background-color: ${({ theme }) => theme.colors.navButtonBackground};
    border: none;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 3;
    margin: 5px 5px 0 0 ;
    width: 50px;
    height: 45px;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    z-index: 3;
    @media ${({ theme }) => theme.device.tablet} {
        display: none;
    }
`;

const StyledNavIconSpan = styled.span`
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    background-color: ${({ open }) => open ?
        ({ theme }) => theme.colors.navButtonClose :
        ({ theme }) => theme.colors.navButton};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    top: 0;
    transform: rotate(0deg);
    transition: .15s ease-in-out;
    &:nth-child(1){
        top: ${({ open }) => open && '0px'};
        transform: ${({ open }) => open && 'rotate(45deg)'};
        left: ${({ open }) => open && '8px'};
        transform-origin: left center;
    }
    &:nth-child(2){
        top: 18px;
        transform-origin: left center;
        width: ${({ open }) => open && '0%'};
        opacity: ${({ open }) => open && '0'};

    }
    &:nth-child(3){
        top: ${({ open }) => open && '39px'};
        transform: ${({ open }) => open && 'rotate(-45deg)'};
        left: ${({ open }) => open && '8px'};
        top: 36px;
        transform-origin: left center;
    }
`;


const MenuButton = ({ open, handleOpen }) => {
    return (
        <StyledMenuButton onClick={() => handleOpen(!open)}>
            <StyledNavIconSpan open={open}></StyledNavIconSpan>
            <StyledNavIconSpan open={open}></StyledNavIconSpan>
            <StyledNavIconSpan open={open}></StyledNavIconSpan>
        </StyledMenuButton>
    );
}

export default MenuButton;