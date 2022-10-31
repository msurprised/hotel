import styled from "styled-components";

export const Nav = styled.nav`
    height: 76px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #EAEFF6;
    z-index: 1000;
`;

export const NavContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 1112px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: auto;

    @media screen and (max-width: 1200px) {
        width: 90%;
    }
`;

export const NavLogoLink = styled.div`
    height: 46px;
    width: 126px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 10px;

    &:hover{
        cursor: pointer;
    }
`;

export const MobileIconWrap = styled.div`
    display: none;
    color: #597193;
    font-size: 30px;
    transition: 0.2s ease;
    padding-bottom: 10px;

    @media screen and (max-width: 1024px) {
        display: block;

        &:hover {
            scale: 1.1;
            cursor: pointer;
        }
    }
`;

export const ImgLogo = styled.img`
    height: 46px;
    width: auto;

    @media screen and (max-width: 768px) {
        height: 36px;
        padding-bottom: 10px;
    }
`;

export const LogoText = styled.h1`
    width: 87px;
    height: 30px;
    color: #597193;
    font-size: 26px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const NavElements = styled.div`
    display: block;
    height: 100%;
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const NavUl = styled.ul`
    height: 100%;
    width: 507px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 0 0 10px 0;
`;

export const NavLi = styled.li`
    list-style: none;
    text-decoration: none;
    color: black;

    &:hover{
        color: #597193;
        border-bottom: #597193 2px solid;
        margin-bottom: -2px;
        cursor: pointer;
    }
`;

export const NavBtn = styled.div`
    width: 135px;
    height: 40px;
    font-size: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #597193;
    border-radius: 4px;
    box-shadow: 0px 4px 12px rgba(21, 21, 21, 0.15);
    margin-left: 40px;
    margin-bottom: 5px;
    transition: 0.07s ease;

    &:hover{
        background: #79A0C1;
        cursor: pointer;
    }
`;