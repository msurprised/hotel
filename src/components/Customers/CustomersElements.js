import styled from "styled-components";

export const CustomersContainer = styled.section`
    width: 100%;
`;

export const ContentWrap = styled.div`
    width: 100%;
    max-width: 1112px;
    margin: auto;
`;

export const CustH2 = styled.h2`
    margin-top: 119px;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #353637;

    @media screen and (max-width: 1120px) {
        margin-left: 30px;
    }

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }
`;

export const CustP = styled.p`
    margin-top: 13px;
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.045em;
    color: #959595;

    @media screen and (max-width: 1120px) {
        margin-left: 30px;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`;