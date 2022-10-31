import styled from "styled-components";
import bg from '../../Images/bgForClientCard.svg';

export const SlideContainer = styled.div`
    position: relative;
    background: ${({isActive}) => (isActive ? 'rgba(113, 136, 170, 0.55)' : '#F6FCFA')};
    border-radius: 6px;
    height: 380px;
    max-width: 350px;
    margin-top: ${({isActive}) => (isActive ? '-27px' : '0')};
    box-shadow: 0px 5px 19px rgba(66, 66, 66, 0.2);
    overflow: hidden;
    transition: 0.1s ease;
    &:hover{
        cursor: ${({isActive}) => (isActive ? '' : 'pointer')};
        scale: 1.02;
    }

    @media screen and (max-width:1024px) {
        display: ${({isActive}) => (isActive ? 'block' : 'none')};
    }

    @media screen and (max-width: 768px) {
        height: 420px;
    }

`;

export const EmptySlide = styled.div`
    @media screen and (max-width:1024px) {
        display: ${({isActive}) => (isActive ? 'block' : 'none')};
    }
`;

export const BgImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: ${({isActive}) => (isActive ? 'block' : 'none')};
    background-image: url(${bg});
    z-index: -4;
`;

export const ImgWrap = styled.div`
    border-radius: 50px;
    height: 83px;
    width: 83px;
    overflow: hidden;
    background-color: white;
    margin: 57px 0 24px 37px;
`;

export const InfoWrap = styled.div`
    padding: 0 37px 0 37px;

    @media screen and (max-width:1024px) {
        padding: 0 10px;
    }

`;

export const SlideImg = styled.img`
    height: 100%;
    object-fit: fill;
`;

export const Name = styled.div`
    font-family: 'Work Sans';
    font-weight: 500;
    font-size: 30px;
    line-height: 50px;
    color: ${({isActive}) => (isActive ? '#fff' : '#101828')};
`;

export const Organisation = styled.div`
    font-family: 'Work Sans';
    font-weight: 400;
    font-size: 12px;
    line-height: 50px;
    color: ${({isActive}) => (isActive ? '#fff' : '#606772')};
`;

export const Description = styled.p`
    font-family: 'Merriweather';
    font-weight: 300;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${({isActive}) => (isActive ? '#fff' : '#6D7589')};
`;