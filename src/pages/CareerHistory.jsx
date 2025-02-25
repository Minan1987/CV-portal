import React from 'react';
import { Grid, Typography, Box, Divider } from '@mui/material';
import { Diversity1Outlined } from '@mui/icons-material';

const CareerHistory = () => {
  return (
    <Grid container>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: 1 }}>
          <Typography variant='h4' color='orange'>سوابق شغلی</Typography>
          <Diversity1Outlined fontSize='large' sx={{ color: "orange" }} />
        </Box>
        <Divider variant='middle'
          sx={{
            "&::before, &::after": {
              borderStyle: 'dashed'
            }
          }}
        />
      </Grid>
    </Grid>
  )
}

export default CareerHistory
