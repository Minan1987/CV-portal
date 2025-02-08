import React, { useState } from 'react'
import Grid2 from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import { Box, Drawer, Fab } from '@mui/material';
import DrawerContent from './ui/DrawerContent';
import { MenuRounded } from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    }
    return (
        <Grid2 sx={{ bgcolor: grey[800] }}
            size={{
                xs: 0,
                sm: 0,
                md: 3,
                lg: 2,
                xl: 2,
            }}
        >
            <Box sx={{
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none"
                }
            }}>
                <Fab aria-label='sidebar'
                      size='medium'  
                      sx={{m:2}}
                      onClick={handleDrawerToggle}
                >
                    <MenuRounded />
                </Fab>
            </Box>
            <DrawerContent value={value} handleChange={handleChange} />
            <Drawer
                open={drawerOpen}
                variant='temporary'
                onClose={() => setDrawerOpen(false)}
                sx={{
                    "& .MuiDrawer-paper": {
                        width: "300px",
                        bgcolor:grey[800]
                    },
                    display: {
                        xs: "block",
                        sm: "block",
                        md: "none",
                        lg: "none"
                    }
                }}
            >
                <DrawerContent value={value} handleChange={handleChange} />
            </Drawer>

        </Grid2>
    )
}

export default Sidebar
