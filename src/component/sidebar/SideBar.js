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
import ActiveDashboardIcon from "../../assets/images/active-dashboard.svg"
import DashboardIcon from "../../assets/images/dashboard.svg"

import ActiveChartsquare from "../../assets/images/active-chart-square.svg"
import Chartsquare from "../../assets/images/chart-square.svg"

import ActiveProfile from "../../assets/images/active-s_profile.svg"
import Profile from "../../assets/images/s_profile.svg"

import ActiveUsdRound from "../../assets/images/active-usd-round.svg"
import Usdround from "../../assets/images/usd-round.svg"

import ActiveSetting from "../../assets/images/active-setting-2.svg"
import Setting from "../../assets/images/setting-2.svg"

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
              <CDBSidebarMenuItem >
                {activeTab === "dashboard" ?
                <img src={ActiveDashboardIcon} className='side-ico' alt="ico" />
                :
                <img src={DashboardIcon} className='side-ico' alt="ico" />
                }
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/monitors" activeClassName="activeClicked" className={activeTab === "monitors" ? "active-tab" : ""} onClick={() => handleActiveTab("monitors")}>
              <CDBSidebarMenuItem textColor="black">
              {activeTab === "monitors" ?
                <img src={ActiveChartsquare} className='side-ico' alt="ico" />
                :
                <img src={Chartsquare} className='side-ico' alt="ico" />
                }
                Monitors</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/cost-cutter" activeClassName="activeClicked" className={activeTab === "cost-cutter" ? "active-tab" : ""} onClick={() => handleActiveTab("cost-cutter")}>
              <CDBSidebarMenuItem >
              {activeTab === "cost-cutter" ?
                <img src={ActiveUsdRound} className='side-ico' alt="ico" />
                :
                <img src={Usdround} className='side-ico' alt="ico" />
                }
                Cost Cutter
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter  style={{ color:'black', textAlign: 'left' }}>
            <NavLink style={{color:'black', textDecoration:'none'}} className={activeTab === "profile" ? "active-tab" : ""}  exact to="/profile" activeClassName="activeClicked" onClick={() => handleActiveTab("profile")}>
              <CDBSidebarMenuItem >
              {activeTab === "profile" ?
                <img src={ActiveProfile} className='side-ico' alt="ico" />
                :
                <img src={Profile} className='side-ico' alt="ico" />
                }

              Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink style={{color:'black', textDecoration:'none'}} className={activeTab === "settings" ? "active-tab" : ""} exact to="/settings" activeClassName="activeClicked" onClick={() => handleActiveTab("settings")}>
              <CDBSidebarMenuItem >
              {activeTab === "settings" ?
                <img src={ActiveSetting} className='side-ico' alt="ico" />
                :
                <img src={Setting} className='side-ico' alt="ico" />
                }  
              Settings</CDBSidebarMenuItem>
            </NavLink>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;