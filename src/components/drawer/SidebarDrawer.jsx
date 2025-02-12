import React from 'react'
import { Drawer } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SidebarContent } from '../sidebar';

const SidebarDrawer = ({ setDrawerOpen, drawerOpen, value, handleChange }) => {
    return (
        <Drawer
            open={drawerOpen}
            variant='temporary'
            onClose={() => setDrawerOpen(false)}
            sx={{
                "& .MuiDrawer-paper": {
                    width: "300px",
                    bgcolor: grey[800]
                },
                display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "none"
                }
            }}
        >
            <SidebarContent value={value} handleChange={handleChange} setDrawerOpen={setDrawerOpen} />
        </Drawer>
    )
}

export default SidebarDrawer
