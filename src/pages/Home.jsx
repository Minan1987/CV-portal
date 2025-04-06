import React, { useRef, useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { Box, Typography } from '@mui/material';
import Typed from 'typed.js';

const Home = () => {
    const description = useRef(null);
    useEffect(() => {
        const typedDescription = new Typed(description.current, {
            strings: ['توسعه دهنده فول استک وب...',
                'مهندس پویایی و تعامل در صفحات وب...',
                'معمار دنیای دیجیتال با کامپوننت‌های مدرن و تعاملی...',
                'خالق جهان‌های دیجیتالی که به نرمی و سرعت اجرا می‌شوند...',
                'طراح رابط کاربری'
            ],
            typeSpeed: 50,
            showCursor: false,
            loop: true
        })

        return () => {
            typedDescription.destroy();
        }
    }, [])

    return (
        <Box sx={{ position: 'relative', height: '100vh', overflowX: 'hidden' }}>
            <Helmet>
                <title>پورتال شخصی مینا نظری|صفحه اصلی</title>
            </Helmet>
            <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            >
                <source src="/images/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    zIndex: 1
                }}
            >
                <Typography variant='h3' color='white'>مینا<span style={{ color: "orange" }}>نظری</span></Typography>
                <Typography ref={description}
                    color='white'
                    variant='h5'
                    sx={{
                        textDecoration: "underline",
                        textDecorationColor: "#ffa500",
                        whiteSpace: "nowrap",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }}
                >
                </Typography>
            </Box>
        </Box>
    )
}

export default Home
