import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
  return (
    <div style={{ display: 'flex', height: 'calc(100vh + -66px)', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/monitors" activeClassName="activeClicked">
              <CDBSidebarMenuItem textColor="black" icon="table">Monitors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cost-cutter" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Cost Cutter</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter  style={{ color:'black', textAlign: 'left' }}>
            <NavLink style={{color:'black', textDecoration:'none'}} exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem  >Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink style={{color:'black', textDecoration:'none'}} exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem >Settings</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;