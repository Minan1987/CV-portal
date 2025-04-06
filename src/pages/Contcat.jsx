import React from 'react';
import { Helmet } from "react-helmet-async";
import { Grid, Typography, Box, Divider, TextField, Button } from '@mui/material';
import {
    AlternateEmailOutlined,
    Telegram,
    FmdGoodOutlined,
    PhoneEnabledOutlined
} from '@mui/icons-material';
import emailjs from '@emailjs/browser';

const Contcat = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_i22480j',
            'template_25wmhfq',
            e.target,
            'WjTWbuqJG3N6ilwCW'
        ).then(
            (result) => {
                console.log('Success:', result.text);
            }
        )
            .catch(
                (error) => {
                    console.log('Error:', error.text);
                }
            );
        e.target.reset();
    }

    return (
        <Grid container>
            <Helmet>
                <title>پورتال شخصی مینا نظری|تماس با من</title>
            </Helmet>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: 1 }}>
                    <Typography variant='h4' color='orange'>ارتباط با من</Typography>
                    <AlternateEmailOutlined fontSize='large' sx={{ color: "orange" }} />
                </Box>
                <Divider variant='middle'
                    sx={{
                        "&::before, &::after": {
                            borderStyle: 'dashed'
                        }
                    }}
                />
            </Grid>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <Box sx={{ width: 1, textAlign: "center", pt: 2 }}>
                    <Typography variant='h6'
                        sx={{
                            width: "fit-content",
                            margin: "0 auto",
                            position: "relative",
                            borderBottom: "2px solid orange",
                            padding: "5px 10px",
                            lineHeight: "1em",
                            "&::before, &::after": {
                                position: "absolute",
                                content: '""',
                                width: "2px",
                                height: "5px",
                                bottom: 0,
                                backgroundColor: "orange"
                            },
                            "&::before": {
                                left: 0
                            },
                            "&::after": {
                                right: 0
                            }
                        }}
                    >فرصتی برای گفت‌وگویی سازنده و آغاز یک همکاری
                    </Typography>
                </Box>
                <Box
                    component='form'
                    onSubmit={sendEmail}
                    sx={{ '& > :not(style)': { mt: 5 } }}
                >
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}>
                        <TextField
                            id="outlined-basic"
                            label="نام شما"
                            name="name"
                            variant="outlined"
                            color='warning'
                            sx={{ minWidth: "29ch", m: 1 }}
                        />
                        <TextField
                            id="outlined-basic"
                            label="ایمیل شما"
                            name="email"
                            variant="outlined"
                            color='warning'
                            sx={{ minWidth: "29ch", m: 1 }}
                        />

                    </div>
                    <div
                        style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "center"
                        }}
                    >
                        <TextField
                            id="outlined-multiline-static"
                            label="چطور میتونم به شما کمک کنم؟"
                            name="message"
                            multiline
                            rows={4}
                            variant="outlined"
                            color='warning'
                            sx={{ minWidth: "60ch" }}

                        />
                    </div>
                    <div style={{ width: "100%", textAlign: "center" }}>
                        <Button
                            type='submit'
                            variant='outlined'
                            color='warning'
                            size='large'
                            sx={{ minWidth: "150px" }}
                        >
                            ارسال
                        </Button>
                    </div>
                </Box>
            </Grid>
            <Grid container>
                <Grid item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    sx={{ textAlign: "center", my: "50px" }}
                >
                    <Telegram fontSize="large" color='warning' />
                    <br />
                    <a
                        href='https://t.me/mina_n1987'
                        target='_blank'
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "1.5rem"
                        }}
                    >
                        Mina_n1987@
                    </a>
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    sx={{ textAlign: "center", mt: "50px" }}
                >
                    <FmdGoodOutlined fontSize="large" color='warning' />
                    <br />
                    <Typography
                        style={{
                            color: "#fff",
                            fontSize: "1.5rem"
                        }}
                    >
                        تهران, مرزداران
                    </Typography>
                </Grid>
                <Grid item
                    xs={12}
                    sm={12}
                    md={4}
                    lg={4}
                    sx={{ textAlign: "center", mt: "50px" }}
                >
                    <PhoneEnabledOutlined fontSize="large" color='warning' />
                    <br />
                    <a
                        href='tel:+989124548361'
                        style={{
                            color: "#fff",
                            textDecoration: "none",
                            fontSize: "1.5rem"
                        }}
                    >
                        ۳۶۱ ۴۵۴۸ ۹۱۲ ۹۸+
                    </a>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Contcat
