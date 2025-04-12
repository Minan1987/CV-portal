import React from 'react'
import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const SidebarContainer = ({ children }) => {
    return (
        <Grid
            item
            sx={{
                bgcolor: grey[800],
                height: "100vh",
                position: "relative",
                scrollbarWidth:"none",
                display: { xs: "none", md: "block" }
            }}
            md={3}
            lg={2}
            xl={2}
        >
            {children}
        </Grid>

    )
}

export default SidebarContainer
