import React from 'react';
import {SidebarContainer, SidebarContent, SidebarUl, SidebarLi} from './SidebarElements'

const Sidebar = ({isSidebarOpen, toggle} ) => {
  return (
    <SidebarContainer isSidebarOpen={isSidebarOpen}>
        <SidebarContent>
            <SidebarUl>
                <SidebarLi onClick={toggle}>Hotel</SidebarLi>
                <SidebarLi onClick={toggle}>Branch</SidebarLi>
                <SidebarLi onClick={toggle}>Search</SidebarLi>
                <SidebarLi onClick={toggle}>About us</SidebarLi>
                <SidebarLi onClick={toggle}>Pages</SidebarLi>
                <SidebarLi onClick={toggle}>Blog</SidebarLi>
                <SidebarLi onClick={toggle}>Reservation</SidebarLi>
            </SidebarUl>
        </SidebarContent>
    </SidebarContainer>
  )
}

export default Sidebar;