import styled from "styled-components";

export const HomeContainer = styled.section`
    height: 775px;
    width: 100%;
    background-color: #EAEFF6;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        height: 680px;
        
    }
`;

export const HomeWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
    max-width: 1110px;
    margin: auto;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 1230px) {
        padding-left: 50px;
        padding-right: 50px;
    }
    
`;

export const InfoContentWrap = styled.div`
    max-width: 447px;
    padding-top: 110px;
    height: 286px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
    @media screen and (max-width: 1230px) {
        padding-top: 90px;
    }
    @media screen and (max-width: 1024px) {
        max-width: 700px;
        height: 350px;
    }
    @media screen and (max-width: 768px) {
        max-width: 340px;
        height: 500px;
    }
`;

export const InfoH1 = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 45px;
    line-height: 55px;
    color: #3D4550;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
`;

export const InfoDescriprion = styled.p`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #939393;
    margin-bottom: 36px;

    @media screen and (max-width: 1024px) {
        line-height: 35px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 330px;
    justify-content: space-between;
`;

export const FirstBtn = styled.div`
    width: 135px;
    height: 40px;
    background: #597193;
    box-shadow: 0px 4px 12px rgba(21, 21, 21, 0.15);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: lighter;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    transition: 0.1s ease;

    &:hover{
        background: #79A0C1;
        cursor: pointer;
    }
`;

export const SecondBtn = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    transition: 0.1s ease;

    &:hover {
        cursor: pointer;
        color: #79A0C1;
    }
`;

export const SecondBtnImg = styled.div`
    position: absolute;
    right: 0px;
    height: 40px;
    width: 40px;
    padding-right: 99px;
    border-radius: 50px;
    font-size: 40px;
    color: #597193;
    transition: 0.1s ease;

    &:hover {
        color: #79A0C1;
    }
`;

export const ImgSection = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const TowerImg = styled.img`
    position: absolute;
    height: 75%;
    width: auto;
    bottom: 0;
    left: 120px;
    z-index: 2;  
    
`;

export const Elipse1 = styled.div`
    position: relative;
    width: 41px;
    height: 41px;
    top: 10px;
    left: 450px;
    border-radius: 50px;
    background: #C9D6E9;
`;

export const Elipse2 = styled.div`
    position: relative;
    width: 27px;
    height: 27px;
    top: 470px;
    left: 490px;
    border-radius: 50px;
    background: #C9D6E9;   
`;

export const Elipse3 = styled.div`
    position: relative;
    width: 21px;
    height: 21px;
    top: 30px;
    left: -50px;
    border-radius: 50px;
    background: #C9D6E9;  
`;

export const Elipse4 = styled.div`
    position: relative;
    width: 10px;
    height: 10px;
    top: 410px;
    left: -220px;
    border-radius: 50px;
    background: #C9D6E9;  
`;

export const Elipse5 = styled.div`
    position: absolute;
    bottom: 70px;
    left: 20px;
    width: 540px;
    height: 540px;
    border-radius: 50%;
    background-color: #F6FCFA;
    z-index: 1;

    @keyframes moving {
    100% {transform: rotate(-360deg);}
    }
    animation: moving 60s infinite linear;
    transform-origin: 270px 270px;
`;

export const GraphSection = styled.img`
    position: absolute;
    bottom: 30px;
    left: -130px;
    z-index: 998;
    transition: 0.1s ease-in-out;

    &:hover {
        scale: 1.06;
    }

    @media screen and (max-width: 1230px) {
        left: -50px;
    }
`;

export const PaymentWrap = styled.div`
    position: absolute;
    height: fit-content;
    width:  fit-content;
    padding: 22px 19px;
    border-radius: 5px;
    background-color: #fff;
    top: 270px;
    left: 500px;
    z-index: 998;
    box-shadow: 0px 0px 15px 0px rgba(120, 141, 157, 0.1);
    transition: 0.1s ease;

    &:hover {
        scale: 1.06;
    }

    @media screen and (max-width: 1230px) {
        left: 350px;
    }
`;

export const Payment = styled.img`

`;
