import styled from 'styled-components';
import React from 'react';
import { bool } from 'prop-types';
import { Link } from 'react-router-dom'
import SwitchDarkMode from '../toggle/switchDarkMode/SwitchDarkMode'
import avatar from '../../assets/avatar.png'


export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.burgerMenu};
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 40%;
    }
  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: color 0.3s linear;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }
    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`

const Avatar = styled.img`
    height: 40px;
    width: 40px;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 20px;
    margin-bottom: 20px;
    &:hover {
        cursor: pointer;
    }
`

const Text = styled.div`
    font-weight: 200;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${ props => props.theme.text };
    margin-right: 20px;
    font-family: 'Fjalla One', sans-serif;
    margin-bottom: 20px;
`

const TextHover = styled.span`
    &:hover {
        background: linear-gradient(45deg, rgba(231,0,138,1) 0%, rgba(255,0,58,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const Menu = ({ open, setOpen, ...props }) => {
  
    const isHidden = open ? true : false;  
    return (
      <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
        <Text>
          <Link to='/' onClick={() => setOpen(false)}><TextHover>HOME</TextHover></Link>
        </Text>
        <Text>
          <Link to='buy' onClick={() => setOpen(false)}><TextHover>BUY</TextHover></Link>
        </Text>
        <Avatar src={avatar}></Avatar>
        <SwitchDarkMode/>
      </StyledMenu>
    )
  }
  
  Menu.propTypes = {
    open: bool.isRequired,
  }
  
  export default Menu;
  