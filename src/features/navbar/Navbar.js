import { useRef, useState } from 'react';
import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'
import {isMobile} from 'react-device-detect';
import SwitchDarkMode from '../toggle/switchDarkMode/SwitchDarkMode'
import { Link } from 'react-router-dom'
import Burger from '../burger/Burger'
import Menu from '../menu/Menu'
import { useOnClickOutside } from '../../helpers/hooks';

const Wrapper = styled.nav`
    width: 100vw;
    height: 70px;
    background-color: ${ props => props.theme.navbarColor };
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${ props => props.theme.navbarBorder };
`
const Logo = styled.img`
    height: auto;
    width: 15rem;
`

const Buy = styled.div`
    font-weight: 200;
    font-size: 1.5rem;
    text-decoration: none;
    color: ${ props => props.theme.text };;
    margin-left: auto;
    margin-right: 20px;
    font-family: 'Fjalla One', sans-serif;    
`

const TextHover = styled.span`
    &:hover {
        background: linear-gradient(45deg, rgba(231,0,138,1) 0%, rgba(255,0,58,1) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`
const BurgerWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row-reverse;
    margin-right: 30px;
    z-index: 99;
`

const Avatar = styled.img`
    height: 40px;
    width: 40px;
    object-fit: contain;
    border-radius: 50%;
    margin-right: 20px;
    &:hover {
        cursor: pointer;
    }
`

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const node = useRef();
  
    useOnClickOutside(node, () => setOpen(false));

    const mobileMenu = () => {
        if(isMobile) {
            return (
                <BurgerWrapper ref={node}>
                        <Burger open={open} setOpen={setOpen} />
                        <Menu open={open} setOpen={setOpen} />
                </BurgerWrapper>
            )
        }
        return (
            <>
            <Buy><Link to='buy'><TextHover>BUY</TextHover></Link></Buy>
            <Avatar src={avatar}></Avatar>
            <SwitchDarkMode/>
            </>
        )
    }
    return (
    <Wrapper>
       <Link to='/'><Logo src={logo}/></Link>
       { mobileMenu() }
    </Wrapper>
    )
}
