import React from 'react'
import img from '../../Images/logo.svg';
import {Nav, NavBtn, NavContainer, NavElements, NavLi,
NavLogoLink, NavUl, ImgLogo, LogoText, MobileIconWrap} from './NavbarElements';
import {FaBars} from 'react-icons/fa';

const Navbar = ({toggle}) => {

  return (
    <>
        <Nav>
            <NavContainer>
                <NavLogoLink>
                    <ImgLogo src={img}/>
                    <LogoText>HOTEL</LogoText>
                </NavLogoLink>
                <MobileIconWrap onClick={toggle}>
                  <FaBars />
                </MobileIconWrap>
                <NavElements>
                    <NavUl>
                        <NavLi>Hotel</NavLi>
                        <NavLi>Branch</NavLi>
                        <NavLi>Search</NavLi>
                        <NavLi>About us</NavLi>
                        <NavLi>Pages</NavLi>
                        <NavLi>Blog</NavLi>
                    </NavUl>
                    <NavBtn>Reservation</NavBtn>
                </NavElements>
            </NavContainer>
        </Nav>
    </>
  )
}

export default Navbar