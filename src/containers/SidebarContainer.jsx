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
                overflowY: "auto",
                scrollbarWidth:"none",
                display: { xs: "none", md: "block" } // Hide on xs and sm
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
