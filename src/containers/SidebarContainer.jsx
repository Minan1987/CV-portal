import React from 'react'
import Grid2 from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';

const SidebarContainer = ({ children }) => {
    return (
        <Grid2 sx={{ bgcolor: grey[800], height:"100vh", overflowY:"auto", overflowX:"hidden" }}
            size={{
                xs: 0,
                sm: 0,
                md: 3,
                lg: 2,
                xl: 2,
            }}
        >
            {children}
        </Grid2>
    )
}

export default SidebarContainer
