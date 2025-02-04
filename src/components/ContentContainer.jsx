import React from 'react'
import Grid2 from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const ContentContainer = () => {
    return (
        <Grid2 xs={12}
            sm={12}
            md={8}
            lg={9}
            xl={9}
        >
            <Typography variant="h4"> محتوای اصلی سایت</Typography>
        </Grid2>
    )
}

export default ContentContainer
