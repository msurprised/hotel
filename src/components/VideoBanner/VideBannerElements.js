import styled from "styled-components";

export const BannerContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: rgba(40, 40, 40, 0.84);
    top: 0px;
    left: 0px;
    z-index: 2000;
    display: flex;
    opacity: ${({isVideoBannerOpen}) => (isVideoBannerOpen ? '1' : '0')};
    visibility: ${({isVideoBannerOpen}) => (isVideoBannerOpen ? 'visible' : 'hidden')};
    justify-content: center;
    align-items: center;
    transition: 0.1s ease-in;
`;

export const BannerContent = styled.div`
    position: relative;
    width: 60%;
    height: fit-content;
    background-color: transparent;
    border-radius: 2px;
    transition: 0.2s ease-in;
    scale: ${({isVideoBannerOpen}) => (isVideoBannerOpen ? '1 1' : '1 0.005')};

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const CloseBtn = styled.div`
    position: absolute;
    color: #fff;
    right: -40px;
    top: -40px;
    transition: 0.1s ease;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        transform: rotate(90deg);
        color: rgba(222, 222, 225, 0.74);
    }

    @media screen and (max-width: 768px) {
        right: 20px;
        top: -50px;
    }
`;

export const Video = styled.video`
    max-width: 100%;
    max-height: auto;
    object-fit: cover;
    -o-object-fit: cover;
`;