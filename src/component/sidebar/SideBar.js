import React, { useEffect, useState } from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import "./sidebar.css"

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("")

  useEffect(() => {
    let activePath = window.location.pathname.split("/")[1]
    setActiveTab(activePath)
  }, [])

  const handleActiveTab = (selectedTab) => {
    setActiveTab(selectedTab);
  }

  return (
    <div style={{ display: 'flex', height: 'calc(100vh + -66px)', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/dashboard" activeClassName="activeClicked" className={activeTab === "dashboard" ? "active-tab" : ""} onClick={() => handleActiveTab("dashboard")}>
              <CDBSidebarMenuItem icon="columns">Dashboard </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/monitors" activeClassName="activeClicked" className={activeTab === "monitors" ? "active-tab" : ""} onClick={() => handleActiveTab("monitors")}>
              <CDBSidebarMenuItem textColor="black" icon="table">Monitors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cost-cutter" activeClassName="activeClicked" className={activeTab === "cost-cutter" ? "active-tab" : ""} onClick={() => handleActiveTab("cost-cutter")}>
              <CDBSidebarMenuItem icon="user">Cost Cutter</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter  style={{ color:'black', textAlign: 'left' }}>
            <NavLink style={{color:'black', textDecoration:'none'}} className={activeTab === "profile" ? "active-tab" : ""}  exact to="/profile" activeClassName="activeClicked" onClick={() => handleActiveTab("profile")}>
              <CDBSidebarMenuItem  >Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink style={{color:'black', textDecoration:'none'}} className={activeTab === "settings" ? "active-tab" : ""} exact to="/settings" activeClassName="activeClicked" onClick={() => handleActiveTab("settings")}>
              <CDBSidebarMenuItem >Settings</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;