import styled from "styled-components";

export const BlogContainer = styled.section`
    width: 100%;
    
`;

export const BlogWrap = styled.div`
    width: 100%;
    max-width: 1112px;
    margin: auto;
`;

export const BlogH2 = styled.h2`
    font-family: 'Average Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.26em;
    color: #7587A0;
    margin-bottom: 16px;

    @media screen and (max-width: 1120px) {
        margin-left: 30px;
    }
`;

export const BlogP = styled.p`
    font-weight: 400;
    font-size: 45px;
    line-height: 55px;
    color: #353637;

    @media screen and (max-width: 1120px) {
        margin-left: 30px;
    }
`;