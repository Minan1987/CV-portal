import React from 'react';
import { useContext } from 'react';
import Context from '../../context/Context';
import { Drawer } from '@mui/material';
import { grey } from '@mui/material/colors';
import { SidebarContent } from '../sidebar';

const SidebarDrawer = () => {
    const {setDrawerOpen, drawerOpen} = useContext(Context);
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
            <SidebarContent />
        </Drawer>
    )
}

export default SidebarDrawer
