import React from 'react'
import { Box, Typography } from '@mui/material'
import avatarImg from '/images/mypic.jpeg'

const SidebarHeader = () => {
  return (
    <Box sx={{
        position: "relative",
        width: "100%",
        height: "auto",
        margin: "0 auto",
        display: {
            xs: "none",
            sm: "none",
            md: "block"
        }
    }}
    >
        <img src={avatarImg}
            style={{
                width: "100%",
                height: "auto",
                display: {
                    xs: "none",
                    sm: "none",
                    md: "block"
                }
            }}
        />
        <Typography variant="h5"
            color='white'
            sx={{
                position: "absolute",
                bottom: "8px",
                bgcolor: 'rgba(255, 183, 77, 0.7)',
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                width: 1,
                p: "10px",
                textAlign:"center"
            }}
        >
            مینا نظری
        </Typography>
    </Box>
  )
}

export default SidebarHeader
