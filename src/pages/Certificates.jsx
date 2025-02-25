import React from 'react'
import { Grid, Typography, Box, Divider } from '@mui/material';
import {CardMembershipOutlined} from '@mui/icons-material';

const Certificates = () => {
  return (
    <Grid container>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: 1 }}>
          <Typography variant='h4' color='orange'>دوره ها و گواهینامه ها</Typography>
          <CardMembershipOutlined fontSize='large' sx={{ color: "orange" }} />
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

export default Certificates
