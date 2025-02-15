import React from 'react'
import { useContext } from 'react';
import Context from '../../context/Context';
import { Box, Tabs, Tab } from '@mui/material';
import { grey } from '@mui/material/colors';
import { tabsData } from "../data/tabsData-sidebar"

const SidebarTabs = () => {
    const { value, handleChange, setDrawerOpen } = useContext(Context);
    const data = tabsData();
    return (
        <Box sx={{
            textAlign: "center",
            p: 2
        }}
        >
            <Tabs value={value}
                onChange={handleChange}
                orientation="vertical"
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                sx={{ justifyContent: "start" }}
            >
                {
                    data.map((tab, index) => (
                        <Tab key={index}
                            label={tab.label}
                            icon={tab.icon}
                            iconPosition="start"
                            sx={{ color: grey[50], justifyContent: "start" }}
                            onClick={() => setDrawerOpen(false)}
                            {...tab}
                        />
                    ))
                }
            </Tabs>
        </Box>
    )
}

export default SidebarTabs
