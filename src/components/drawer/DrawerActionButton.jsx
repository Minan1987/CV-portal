import React from 'react'
import { Box, Fab } from '@mui/material';
import { MenuRounded } from "@mui/icons-material";

const DrawerActionButton = ({setDrawerOpen}) => {
    return (
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
                sx={{ m: 2 }}
                onClick={() => setDrawerOpen(true)}
            >
                <MenuRounded />
            </Fab>
        </Box>
    )
}

export default DrawerActionButton
