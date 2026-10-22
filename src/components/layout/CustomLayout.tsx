"use client";

import React from 'react';
import { useTranshubContext } from '../context/useTranshubContext';
import SideBar from '../elements/SideBar';
import SearchProp from '../elements/SearchProp';
import ScrollToTop from '../elements/ScrollToTop';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isMobile, isSearch, setIsSearch, isSidebar, setIsSidebar } = useTranshubContext();
    return (
        <div className={`custom-cursor ${isMobile ? "locked" : ""} ${isSearch ? "search-active" : ""}`}>
            <div onClick={() => { setIsSidebar(false); setIsSearch(false); }} className={`main-overlay ${isSidebar || isSearch ? 'active' : ''}  `}> </div>
            {children}
            <SideBar />
            <SearchProp />
            <ScrollToTop />
        </div>
    );
};

export default CustomLayout;