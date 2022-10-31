import styled from "styled-components";

export const SignupContainer = styled.section`
    width: 100%;
    margin-bottom: 86px;
`;

export const SignupWrap = styled.div`
    position: relative;
    width: 100%;
    max-width: 1110px;
    margin: auto;
    background: #B1BED0;
    border-radius: 10px;
    height: 383px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width: 1200px) {
        width: 80%;
    }
`;

export const TitleContainer = styled.div`
    max-width: 533px;
    text-align: center;
`;

export const SignupH2 = styled.h2`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.155em;
    color: #FFFFFF;
    margin-bottom: 25px;
    z-index: 100;
`;

export const SignupP = styled.p`
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #334052;
    margin-bottom: 44px;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        line-height: 35px;
        padding: 10px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: row;
    position: relative;
    max-width: 471px;
`;

export const InputWrap = styled.div`
    height: 45px;
    width: 354px;
    padding-right: 40px;
    background-color: #fff;
    box-shadow: 0px 2px 12px rgba(52, 52, 52, 0.15);
    border-radius: 6px;

    @media screen and (max-width: 768px) {
        width: 200px;
    }
`;

export const Input = styled.input`
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 14px;
    line-height: 45px;
    padding-left: 19px;
    color: #A2A2A2;
    width: 100%;
    
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const BgArrowsImg1 = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const BgArrowsImg2 = styled.img`
    position: absolute;
    bottom: 0;
    left: 0;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const InputBtn = styled.button`
    position: absolute;
    right: -1px;
    top: 0px;
    width: 107px;
    height: 46px;
    background: #889CB9;
    box-shadow: -3px 2px 12px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    border: none;
    width: 107px;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    transition: 0.2s ease;

    &:hover{
        cursor: pointer;
        background: #79A0C1;
        right: -5px;
    }

    @media screen and (max-width: 768px) {
        width: 57px;
        font-size: 10px;
    }
`;