import styled from "styled-components";

export const NumContainer = styled.div`
    width: 100%;
`;

export const NumsWrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    max-width: 946px;
    margin: auto;
    margin-top: 118px;

    @media screen and (max-width: 1024px) {
        width: 80%;
    }

    @media screen and (max-width: 768px) {
        margin-top: 90px;
    }
`;

export const Num = styled.div`
`;

export const NumValue = styled.aside`
    font-weight: 700;
    font-size: 50px;
    line-height: 55px;
    text-align: center;
    color: #596B86;

    @media screen and (max-width: 1024px) {
        font-size: 40px;
    }
    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
    @media screen and (max-width: 400px) {
        font-size: 20px;
    }
    
`;

export const Description = styled.p`
    font-family: 'Average Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    color: #939393;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Line = styled.div`
    margin-top: 12px;
    height: 54px;
    width: 0px;
    border-left: 1.5px solid #C4C4C4;
`;