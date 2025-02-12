import React from 'react'
import { useContext } from 'react';
import Context from '../../context/Context';
import { Box, Tabs, Tab } from '@mui/material';
import {
    SentimentSatisfiedAltOutlined,
    CardMembershipOutlined,
    SchoolOutlined,
    DevicesOutlined,
    Diversity2Outlined,
    RoofingOutlined,
} from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const SidebarTabs = () => {
    const {value, handleChange, setDrawerOpen} = useContext(Context);
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };
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
                <Tab label="صفحه اصلی"
                    icon={<RoofingOutlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(0)}
                />
                <Tab label="درباره من"
                    icon={<SentimentSatisfiedAltOutlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(0)}
                />
                <Tab label="دوره ها و گواهینامه ها"
                    icon={<CardMembershipOutlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(1)}
                />
                <Tab label="سوابق تحصیلی"
                    icon={<SchoolOutlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(2)}
                />
                <Tab label="سوابق شغلی"
                    icon={<Diversity2Outlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(3)}
                />
                <Tab label="نمونه کارها"
                    icon={<DevicesOutlined />}
                    iconPosition="start"
                    sx={{ color: grey[50], justifyContent: "start" }}
                    onClick={() => setDrawerOpen(false)}
                    {...tabProps(4)}
                />
            </Tabs>
        </Box>
    )
}

export default SidebarTabs
