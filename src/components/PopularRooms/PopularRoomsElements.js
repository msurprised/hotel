import styled from "styled-components";

export const RoomsContainer = styled.section`
    width: 90%;
    margin: auto;
    height: fit-content;
`;

export const RoomsH2 = styled.h2`
    margin-top: 118px;
    font-weight: 400;
    font-size: 45px;
    line-height: 55px;
    text-align: center;
    color: #353637;

    @media screen and (max-width: 1024px) {
        margin-top: 68px;
        font-size: 35px;
    }
`;

export const RoomsP = styled.p`
    margin-top: 20px;
    font-family: 'Average Sans';
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #959595;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const RoomsWrap = styled.div`
    max-width: 1112px;
    width: 100%;
    margin: auto;
    margin-top: 46px;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;

    @media screen and (max-width: 1140px) {
        max-width: 1000px;
        gap: 20px;
    }

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        max-width: 800px;
    }
`;

export const RoomCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const RoomData = styled.div`
    width: 99.3%;
    border: 1px solid #596B86;
    border-radius: 2px;
    margin-top: -4px;
`;

export const RoomImgWrap = styled.div`
    width: 100%;
    overflow: hidden;
    border-radius: 6px 6px 0px 0px;

    @media screen and (max-width: 1140px) {
        width: 100%;
    }
`;

export const RoomImg = styled.img`
    width: 100%;
    object-fit: cover;
    
`;

export const RoomH3 = styled.h3`
    font-weight: 400;
    font-size: 24px;
    line-height: 55px;
    text-align: left;
    color: #131313;
    margin-left: 23px;
    font-style: normal;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        padding-bottom: 10px;
    }
`;

export const RoomInfo = styled.div`
    display: flex;
    flex-direction: row;
    font-weight: 300;
    font-size: 12px;
    line-height: 28px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    color: #727272;
    margin-left: 23px;
`;

export const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 17px;
`;

export const InfoImg = styled.img`
    margin-right: 4px;

    @media screen and (max-width: 768px) {
        height: 16px;
    }
`;

export const InfoData = styled.p`

`;

export const RoomPrice = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    margin-left: 23px;
    margin-bottom: 24px;
`;

export const Price = styled.strong`
    font-weight: 600;
    font-size: 30px;
    line-height: 55px;
    color: #384D6C;
`;

export const PriceText = styled.p`
 color: #585858;
 padding-bottom: 12px;
 font-size: 16px;
 padding-left: 5px;
`;