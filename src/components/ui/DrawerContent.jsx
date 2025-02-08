import React from 'react'
import { Typography, Avatar, Box, Divider, Tabs, Tab } from '@mui/material';
import avatarImg from '/images/mypic.jpeg'
import {
    SentimentSatisfiedAltOutlined,
    CardMembershipOutlined, SchoolOutlined,
    DevicesOutlined, Diversity2Outlined
} from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const DrawerContent = ({value, handleChange}) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tabpanel-${index}`,
        };
    };
    return (
        <Box sx={{ textAlign: "center", p: 2 }}>
            <Avatar src={avatarImg} variant='rounded' 
            sx={{ 
                width: "200px", 
                height: "200px", 
                margin: "0 auto",
                display:{
                    xs:"none",
                    sm:"none",
                    md:"block"
                }
             }} 
            />
            <Typography variant="h5" color='whitesmoke'>
                مینا نظری
            </Typography>
            <Typography variant='body1' sx={{ color: grey[500] }}>توسعه دهنده فرانت اند</Typography>
            <Typography variant='inherit' sx={{ color: grey[100] }}>(خالق تجربه‌های دیجیتال جذاب)</Typography>
            <Divider variant='middle' color={grey[600]} />
            <Box>
                <Tabs value={value}
                    onChange={handleChange}
                    orientation="vertical"
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                >
                    <Tab label="درباره من"
                        icon={<SentimentSatisfiedAltOutlined />}
                        iconPosition="start"
                        sx={{ color: grey[50] }}
                        {...tabProps(0)}
                    />
                    <Tab label="دوره ها و گواهینامه ها"
                        icon={<CardMembershipOutlined />}
                        iconPosition="start"
                        sx={{ color: grey[50] }}
                        {...tabProps(1)}
                    />
                    <Tab label="سوابق تحصیلی"
                        icon={<SchoolOutlined />}
                        iconPosition="start"
                        sx={{ color: grey[50] }}
                        {...tabProps(2)}
                    />
                    <Tab label="سوابق شغلی"
                        icon={<Diversity2Outlined />}
                        iconPosition="start"
                        sx={{ color: grey[50] }}
                        {...tabProps(3)}
                    />
                    <Tab label="نمونه کارها"
                        icon={<DevicesOutlined />}
                        iconPosition="start"
                        sx={{ color: grey[50] }}
                        {...tabProps(4)}
                    />
                </Tabs>
            </Box>
            <Divider variant='middle' color={grey[600]} />

        </Box>
    )
}

export default DrawerContent
