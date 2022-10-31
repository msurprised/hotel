import React from 'react';
import img from '../../Images/logo.svg';
import {CiLocationOn, CiPhone, CiMail} from "react-icons/ci";
import {FaFacebook, FaYoutube, FaTwitter} from "react-icons/fa";
import { NavLogoLink, ImgLogo, LogoText } from '../Navbar/NavbarElements';
import {FooterContainer, TopFooter, InfoFooter, FooterP, ContactFooter, FooterH2,
FooterContacts, FooterContact, FooterAdress, FooterTel, SocialFooter,
SocialNets, SocialNet, BottomFooterWrap, BottomFooter, OtherInfo, Info, Org} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
        <TopFooter>
            <InfoFooter>
            <NavLogoLink>
                    <ImgLogo src={img}/>
                    <LogoText>HOTEL</LogoText>
                </NavLogoLink>
                <FooterP>Itawa is a responsive real estate landing page template.
                    Itawa is a  landing page template.Itawa template.</FooterP>
            </InfoFooter>
            <ContactFooter>
                <FooterH2>Contact Us</FooterH2>
                <FooterContacts>
                    <FooterContact>
                        <CiLocationOn /> 
                        <FooterAdress>123 Business Centre London SW1A 1AA</FooterAdress>
                    </FooterContact>
                    <FooterContact>
                        <CiPhone /> 
                        <FooterTel href='tel:+1 0000 000 00'>+1 0000 000 00</FooterTel>
                    </FooterContact>
                    <FooterContact>
                        <CiMail /> 
                        <FooterTel href='mailto:info@businessname.com'>info@businessname.com</FooterTel>
                    </FooterContact>
                </FooterContacts>
            </ContactFooter>
            <SocialFooter>
                <FooterH2>Follow Us</FooterH2>
                <SocialNets>
                    <SocialNet><FaFacebook/></SocialNet>
                    <SocialNet><FaYoutube/></SocialNet>
                    <SocialNet><FaTwitter/></SocialNet>
                </SocialNets>
                <FooterP>Itawa is a responsive real estate landing page template.
                    Itawa is a  landing page template.Itawa template.</FooterP>
            </SocialFooter>
        </TopFooter>
        <BottomFooterWrap>
            <BottomFooter>
                <Org>©HOTEL Official 2022</Org>
                <OtherInfo>
                    <Info>Privacy policy</Info>
                    <Info>Cookies</Info>
                    <Info>Terms of service</Info>
                </OtherInfo>
            </BottomFooter>
        </BottomFooterWrap>
    </FooterContainer>
  )
}

export default Footer