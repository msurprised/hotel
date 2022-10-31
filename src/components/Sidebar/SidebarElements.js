import styled from "styled-components";

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #EAEFF6;
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
`;

export const SidebarUl = styled.ul`
    display: grid;
    grid-template-rows: repeat(6, 80px);
`;

export const SidebarLi = styled.li`
    list-style: none;
    color: #597193;
    font-size: 26px;
    font-weight: 600;
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;
