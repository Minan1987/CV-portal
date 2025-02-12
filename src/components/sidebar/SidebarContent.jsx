import React from 'react'
import { Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SidebarHeader, SidebarFooter, SidebarTabs } from './';

const SidebarContent = ({ value, handleChange, setDrawerOpen }) => {

    return (
        <>
            <SidebarHeader />
            <SidebarTabs
                value={value}
                handleChange={handleChange}
                setDrawerOpen={setDrawerOpen}
            />
            <Divider variant='middle'
                color={grey[600]}
                sx={{
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block"
                    }
                }} />
            <SidebarFooter />
        </>
    )
}

export default SidebarContent
