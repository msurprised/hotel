import styled from "styled-components";

export const AvailContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 121px;
    width: 100%;

    @media screen and (max-width: 768px) {
        margin-top: 81px;
    }

`;

export const AvailTitle = styled.div`
    text-align: center;
`;

export const AvailH1 = styled.h1`
    font-weight: 400;
    font-size: 45px;
    line-height: 55px;
    color: #353637;

    @media screen and (max-width: 768px) {
        font-size: 31px;
    }
`;

export const AvailP = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    letter-spacing: 0.02em;
    font-family: 'Average Sans';
    color: #959595;
    margin-top: 16px;
    margin-bottom: 46px;

    
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const ContentWrap = styled.div`
    width: 100%;
    height: 523px;
    max-width: 1112px;
    margin: auto;
    background: #F6FCFA;
    display: grid;
    grid-template-columns: 4fr 3fr;

    @media screen and (max-width: 1200px) {
        width: 90%;
    }

    @media screen and (max-width: 1024px) {
        display: flex;
        height: 540px;
        max-width: 600px;
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
    }

`;

export const ImgSection = styled.div`
    position: relative;
   // width: 637px;
    height: 523px;
    background: #B1BED0;
    overflow: hidden;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const Img = styled.img`
    position: absolute;
    bottom: 0;
`;

export const FormWrap = styled.form`
    position: relative;
    margin-top: 77px;
    width: 339px;
    height: fit-content;
    margin-right: auto;
    margin-left: auto;
    margin-top: 67px;
`;

export const FormElement = styled.div`
`;

export const LabelIcon = styled.label`
    position: absolute;
    right: 14px;
    top: 14px;
    cursor: pointer;
`;

export const LabelInfo = styled.label`
    font-weight: 400;
    font-size: 14px;
    color: #222426;
    cursor: pointer;
`;

export const InputWrap = styled.div`
    position: relative;
    margin-top: 10px;
    margin-bottom: 29px;
    position: relative;
    height: 50px;
    width: 100%;
    border: 1px solid #ABABAB;
    border-radius: 2px;
`;

export const Input = styled.input`
    background-color: transparent;
    border: none;
    padding: 15px 80px 15px 15px;
    font-size: 16px;
    letter-spacing: 0.03em;
    color: #636461;
    cursor: pointer;
    &:focus{
        outline: none;
    }
`;

export const Icon = styled.img`
    
`;

export const FormBtn = styled.button`
    height: 50px;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    border: 1.5px solid #596B86;
    border-radius: 2px;
    line-height: 50px;
    text-align: center;
    margin-top: 3px;
    background-color: transparent;
    color: #222426;
    transition: 0.1s ease;

    &:hover{
        cursor: pointer;
        background: #B1BED0;
    }
`;

export const CalendarWrap = styled.div`
    position: absolute;
    padding: 9px;
    background-color: #fff;
    z-index: 997;
    top: 50px;
    left: -1px;
    transition: 0.08s ease-in-out;
    visibility: ${({isInputActive}) => (isInputActive ? 'visible' : 'hidden')};
    opacity: ${({isInputActive}) => (isInputActive ? '1' : '0')};
    border: 1.5px solid #ABABAB;
    border-radius: 2px;
`;

export const RoomUl = styled.div`
    position: absolute;
    top: 50px;
    left: -1px;
    height: 150px;
    width: 338px;
    transition: 0.1s ease-in-out;
    visibility: ${({isInputActive}) => (isInputActive ? 'visible' : 'hidden')};
    opacity: ${({isInputActive}) => (isInputActive ? '1' : '0')};
`;

export const RoomLi = styled.div`
    height: 50px;
    width: 100%;
    font-weight: 300;
    font-size: 16px;
    border: 1.5px solid #ABABAB;
    line-height: 50px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #636461;
    margin-top: -1px;
    background-color: #fff;
    &:hover{
        cursor: pointer;
        background-color: #F5F5F5;
    }
`;