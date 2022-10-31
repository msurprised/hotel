import styled from "styled-components";

export const SliderContainer = styled.div`
    margin-top: 60px;
    margin-bottom: 124px;
    @media screen and (max-width: 1024px) {
        margin-bottom: 60px;
    }
`;

export const SliderWrap = styled.div`
    width: 98%;
    margin: auto;
    position: relative;
    margin-top: 27px;
    margin-bottom: 40px;
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
    justify-items: center;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 3fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr 5fr 1fr;
    }
`;
export const ImgBtnWrap = styled.div`

`;

export const Btn = styled.div`
    display: none;
    width: 100%;
    height: 100%;
    transition: 0.2s ease;

    @media screen and (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: rgba(113, 136, 170, 0.55);

        &:hover {
            cursor: pointer;
            font-size: 26px;
        }
    }
`;

export const SliderNavigation = styled.ul`
    height: fit-content;
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin: auto;
`;

export const SliderBtn = styled.li`
    height: fit-content;
    width: fit-content;
    font-size: 20px;
    padding: 5px;
    font-weight: bolder;
    list-style: none;
    color: ${({isActive}) => (isActive ? 'rgba(177, 190, 220, 1);' : 'rgba(177, 190, 208, 0.4);')};
    &:hover{
        cursor: pointer;
        color: #597193;
    }
`;