import React from 'react'
import { Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SidebarHeader, SidebarFooter, SidebarTabs } from './';

const SidebarContent = () => {
    
    return (
        <>
            <SidebarHeader />
            <SidebarTabs/>
            <SidebarFooter />
        </>
    )
}

export default SidebarContent
