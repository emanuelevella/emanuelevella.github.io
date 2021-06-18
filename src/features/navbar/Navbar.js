import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import menu from '../../assets/icons/menu.svg'
import {isMobile} from 'react-device-detect';
import SwitchDarkMode from '../Switch/switchDarkMode/SwitchDarkMode'

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

const Buy = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 200;
    font-size: 1.5rem;
    color: ${ props => props.theme.text };;
    margin-left: auto;
    margin-right: 20px;
`

const Menu = styled.img`
    height: auto;
    width: 3rem;
    margin-left: auto;
    margin-right: 20px;
    filter: ${props => props.theme.menuFilter};
`

export default function Navbar() {
    const mobileMenu = () => {
        if(isMobile) return <Menu src={menu}></Menu>
        return (
            <>
            <Buy>Buy</Buy>
            <SwitchDarkMode/>
            </>
        )
    }
    return (
    <Wrapper>
       <Logo src={logo}/>
       { mobileMenu() }
    </Wrapper>
    )
}
