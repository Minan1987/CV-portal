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
                pt: 2,
                textAlign: "center",
                // display: open ? "block" : "none",
            }}
        >
            <Divider variant='middle'
                color={grey[600]}
                sx={{
                    display: {
                        xs: "none",
                        sm: "none",
                        md: "block",
                        lg: "block"
                    }
                }} />
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
