import styled from "styled-components";

export const ServicesContainer = styled.section`
    width: 100%;
`;

export const ServicesH2 = styled.h2`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.26em;
    color: #597193;
    margin-top: 123px;
    margin-bottom: 19px;

    @media screen and (max-width: 768px) {
        margin-top: 71px;
    }
`;

export const ServicesH3 = styled.h3`
    font-weight: 400;
    font-size: 45px;
    line-height: 55px;
    text-align: center;
    color: #353637;
    margin-bottom: 44px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
`;

export const ServiceCardsWrap = styled.div`
    width: 90%;
    max-width: 1112px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 30px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const ServiseCard = styled.div`
    border: 1px solid #596B86;
    border-radius: 2px;
    position: relative;
`;

export const CardH4 = styled.h4`
    font-weight: 400;
    font-size: 24px;
    line-height: 55px;
    color: #131313;
    padding-top: 37px;
    padding-left: 31px;
`;

export const CardP = styled.p`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #9B9B9B;
    padding: 0px 30px 21px 31px;
`;

export const CardImg = styled.img`
    position: absolute;
    top: 20px;
    right: 32px;
`;