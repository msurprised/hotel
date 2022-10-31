import styled from "styled-components";

export const  HistoryContainer = styled.section`
    width: 100%;
`;

export const  HistoryWrap = styled.div`
    width: 100%;
    height: fit-content;
    max-width: 1112px;
    margin: auto;
    margin-top: 126px;
    display: ${({isVideoOpen}) => (isVideoOpen ? 'block' : 'grid')};

    grid-template-columns: 1fr 1fr;

    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const  ContentSection = styled.div`
    height: 100%;
    background: #F6FCFA;
    display: ${({isVideoOpen}) => (isVideoOpen ? 'none' : 'flex')};
    align-items: center;
    margin: auto;

    @media screen and (max-width: 1024px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const  ContentWrap = styled.div`
    padding: 85px 62px;

    @media screen and (max-width: 1200px) {
        padding: 32px 41px;
    }
    @media screen and (max-width: 768px) {
        padding: 15px;
    }
`;

export const  HistoryH2 = styled.h2`
    font-weight: 400;
    font-size: 40px;
    line-height: 55px;
    color: #353637;
    padding-bottom: 12px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const  HistoryP = styled.div`
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    letter-spacing: 0.02em;
    padding-bottom: 31px;
    color: #686868;

    @media screen and (max-width: 1024px) {
        line-height: 36px;
    }

    @media screen and (max-width: 768px) {

    }
`;

export const  VideoSection = styled.div`
    display: ${({isVideoOpen}) => (isVideoOpen ? 'none' : 'block')};
    position: relative;
    height: 100%;
    margin: auto;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const  BgImgWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const  BgImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const  VideoBtnWrap = styled.div`
    position: absolute;
    bottom: 37%;
    left: 37%;
    z-index: 998;
    transition: 0.2s ease-out;

    &:hover{
        cursor: pointer;
        scale: 1.04;
    }
`;

export const  VideoBtn = styled.img`
    
`;

export const  VideoHistory = styled.div`
    position: relative;
    display: ${({isVideoOpen}) => (isVideoOpen ? 'block' : 'none')};
    width: 100%;
    max-width: 1200px;
    background-color: aliceblue;;
    transition: 1s ease;

    @keyframes show {
        0%{scale: 0 0}
        40%{scale: 0 0.005}
        70%{scale: 0.4 0.005}
        100%{scale: 1 1}
    }
    animation: show 0.4s;
`;

export const Video = styled.video`
    height: 100%;
    width: 100%;
    margin: auto;
    object-fit: cover;

`;

export const CloseBtn = styled.div`
    position: absolute;
    color: #000000;
    top:5px;
    right: 15px;
    transition: 0.1s ease;
    font-size: 20px;
    font-weight: bold;
    z-index: 900;
    padding: 20px;

    &:hover {
        cursor: pointer;
        transform: rotate(90deg);
        color: #676767;
    }
`;