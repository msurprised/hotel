import styled from "styled-components";

export const SlideContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: #fff;
    border-radius: 6px 6px 0 0;
    height: fit-content;
    max-width: 350px;
    transition: 0.1s ease;
    &:hover{
        cursor: ${({isActive}) => (isActive ? '' : 'pointer')};
        scale: 1.02;
    }

    @media screen and (max-width:1024px) {
        display: ${({isActive}) => (isActive ? 'block' : 'none')};
    }
`;

export const EmptySlide = styled.div`
    @media screen and (max-width:1024px) {
        display: ${({isActive}) => (isActive ? 'block' : 'none')};
    }
`;

export const ContentWrap = styled.div`
    height: fit-content;
    padding: 23px;
    border: 1px solid #596B86;
`;

export const ImgWrap = styled.div`
    height: fit-content;
    width: 100%;
    margin-bottom: -5px;
`;

export const InfoWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #797979;
    
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const Category = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;


export const CategoryImg = styled.img`
    padding-right: 6px;
    padding-bottom: 4px;
`;


export const SlideImg = styled.img`
    width: 100%;
`;

export const InfoH3 = styled.h3`
    font-weight: 400;
    font-size: 24px;
    line-height: 34px;
    color: #131313;
    margin-top: 10px;
`;

export const Descriprion = styled.p`
    font-family: 'Average Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 0.02em;
    color: #9B9B9B;
    margin-bottom: 20px;
`;

export const Link = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 110px;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: #596B86;

    &:hover {
        cursor: pointer;
        color: #131313;
    }
`;
