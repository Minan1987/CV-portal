import React from 'react'
import { Typography, Box, Divider, IconButton } from '@mui/material';
import {
    LinkedIn,
    GitHub,
    FacebookOutlined,
    CopyrightRounded
} from '@mui/icons-material';
import { grey } from '@mui/material/colors';

const SidebarFooter = ({ open }) => {
    return (
        <Box
            sx={{
                width: 1,
                position:"absolute",
                bottom: 0,
                pb: 2,
                textAlign: "center",
                // display: open ? "block" : "none",
            }}
        >
          
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <IconButton component="a" href="https://www.linkedin.com/in/minanazari1" target="_blank">
                    <LinkedIn fontSize='small' sx={{ color: "whitesmoke" }} />
                </IconButton>
                <IconButton component="a" href="https://github.com/Minan1987" target="_blank">
                    <GitHub fontSize='small' sx={{ color: "whitesmoke" }} />
                </IconButton>
                <IconButton component="a" href="https://www.facebook.com/profile.php?id=100094480797649" target="_blank">
                    <FacebookOutlined fontSize='small' sx={{ color: "whitesmoke" }} />
                </IconButton>
            </Box>

            <Typography variant="caption" color="whitesmoke" sx={{ mt: 2 }}>
                کپی رایت ۱۴۰۳{" "}
                <CopyrightRounded
                    sx={{ verticalAlign: "middle", height: 16 }}
                />
            </Typography>
        </Box>
    )
}

export default SidebarFooter
