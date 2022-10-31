import styled from "styled-components";

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EAEFF6;
    color: #597193;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.1s ease-in-out;
    opacity: ${({ isSidebarOpen }) => (isSidebarOpen ? '1' : '0' )};
    visibility: ${({ isSidebarOpen }) => (isSidebarOpen ? 'visible' : 'hidden' )};
`;

export const SidebarContent = styled.div`
    position: relative;
`;

export const CloseBtn = styled.div`
    position: absolute;
    top: -60px;
    right: -60px;
    transition: 0.1s ease;
    font-size: 20px;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        transform: rotate(90deg);
        color: rgba(222, 222, 225, 0.74);
    }
`;

export const SidebarUl = styled.ul`
    display: grid;
    grid-template-rows: repeat(6, 80px);
`;

export const SidebarLi = styled.li`
    list-style: none;
    font-size: 26px;
    font-weight: 600;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;
