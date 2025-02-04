import React from 'react'
import Grid2 from '@mui/material/Grid2';
import { Typography, Avatar, Box, Divider, Hidden, Tabs, Tab } from '@mui/material';
import avatarImg from '../../public/images/mypic.jpeg'
import { grey } from '@mui/material/colors';
import { SentimentSatisfiedAltOutlined, CardMembershipOutlined, SchoolOutlined, DevicesOutlined, Diversity2Outlined } from '@mui/icons-material';

const Sidebar = ({ value, handleChange }) => {
    const tabProps = (index) => {
        return {
            id: `sidebar-tab-${index}`,
            "aria-controls": `tab-panel-${index}`
        }
    }
    return (
        <Hidden mdDown>
            <Grid2 xs={0}
                sm={0}
                md={4}
                lg={3}
                xl={3}
                sx={{ bgcolor: grey[800] }}>
                <Box sx={{ textAlign: "center" }}>
                    <Avatar src={avatarImg} variant='rounded' sx={{ width: "200px", height: "200px", margin: 2 }} />
                    <Typography variant="h5" color='whitesmoke'>
                        مینا نظری
                    </Typography>
                    <Typography variant='caption' sx={{ color: grey[500] }}>توسعه دهنده فرانت اند</Typography>
                    <Divider variant='middle' color={grey[600]} />
                    <Box>
                        <Tabs value={value}
                            onChange={handleChange}
                            orientation='vertical'
                            variant='scrollable'
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
            </Grid2>
        </Hidden>
    )
}

export default Sidebar
