import React from 'react';
import { Grid, Typography, Box, Divider, List, ListItem, ListSubheader } from '@mui/material';
import {
    PersonOutlineOutlined,
    ArrowBackIosNewOutlined,
    MailOutlineOutlined,
    PhonelinkRingOutlined,
    FmdGoodOutlined,
    LanguageOutlined,
    LinkedIn,
    GitHub
} from '@mui/icons-material';
import { grey, orange } from '@mui/material/colors';
import SkillsCarousel from './components/SkillsCarosel';


const About = () => {
    return (
        <Grid container sx={{ width: "100%" }}>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: "100%" }}>
                    <Typography variant='h4' color='orange'>درباره من</Typography>
                    <PersonOutlineOutlined fontSize='large' sx={{ color: "orange" }} />
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
                lg={4}
            >
                <List sx={{ m: 3 }}>
                    <ListSubheader
                        sx={{
                            backgroundColor: "transparent",
                            fontSize: "1.25rem",
                            fontWeight: "500",
                            lineHeight: "1.6",
                            color: "#fff"
                        }}
                    >اطلاعات شخصی:</ListSubheader>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <PersonOutlineOutlined fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>مینا نظری</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <PhonelinkRingOutlined fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>۳۶۱ ۴۵۴۸ ۹۱۲ ۹۸+</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <MailOutlineOutlined fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>mina.nazary66@gmail.com</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <LinkedIn fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>
                            <a href='https://www.linkedin.com/in/minanazari1' target='_blank' style={{ color: "#bdbdbd", textDecoration: "none" }}>www.linkedin.com/in/minanazari1</a>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <GitHub fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>
                            <a href='https://github.com/Minan1987' target='_blank' style={{ color: "#bdbdbd", textDecoration: "none" }}>github.com/Minan1987</a>
                        </Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='body1' component="span" color='orange' sx={{ paddingRight: "10px" }}>
                            <FmdGoodOutlined fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>تهران- مرزداران  </Typography>
                    </ListItem>
                </List>
            </Grid>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={8}
            >
                <Box variant='h4' sx={{ p: 3 }}>
                    <Typography variant='h6' sx={{ pb: "15px" }}>توسعه‌دهنده جونیور فرانت‌اند </Typography>
                    <Box>
                        <Typography
                            variant='body1'
                            color={grey[400]}
                            sx={{
                                wordWrap: "break-word",
                                overflowWrap: "break-word",
                                maxWidth: "100%"
                            }}
                        >
                            دارای مدرک کارشناسی مهندسی نرم‌افزار از دانشگاه تهران جنوب و کارشناسی ارشد مدیریت کارآفرینی از دانشگاه تهران هستم. پس از بیش از ۸ سال تجربه در طراحی رابط کاربری، در دوره‌های آموزشی طراحی و توسعه وب مجتمع فنی تهران شرکت کرده و موفق به اخذ گواهینامه‌های Web Design و React.js شده‌ام.<br />
                            در حال حاضر، مشتاق فعالیت در توسعه فرانت‌اند هستم و مهارت‌های من شامل <Typography component='span' sx={{ color: "#fff" }}>HTML, CSS, JavaScript, Bootstrap</Typography> و طراحی ریسپانسیو است. همچنین با فریمورک <Typography component='span' sx={{ color: "#fff" }}>React</Typography> و کتابخانه‌های <Typography component='span' sx={{ color: "#fff" }}>Material-UI</Typography> و <Typography component='span' sx={{ color: "#fff" }}>Git</Typography> برای مدیریت نسخه‌ها آشنایی کامل دارم.<br />
                            توانایی ایجاد رابط‌های کاربری کاربرپسند، بهینه‌سازی تجربه کاربری و پیاده‌سازی پروژه‌های نوآورانه را دارم. مهارت‌های من در کار تیمی، ارتباط مؤثر و حل مسئله به من این امکان را می‌دهد که در محیط‌های پویا و خلاق به بهترین شکل عمل کنم. به دنبال فرصت‌های جدیدی برای رشد فنی و حرفه‌ای در شرکت‌های پیشرو هستم.
                        </Typography>
                        <List sx={{ m: 3 }}>
                            <ListSubheader
                                sx={{
                                    backgroundColor: "transparent",
                                    fontSize: "1.25rem",
                                    fontWeight: "500",
                                    lineHeight: "1.6",
                                    color: "#fff"
                                }}
                            >مهارت‌های فنی شامل:</ListSubheader>
                            <ListItem sx={{ color: "#bdbdbd", fontWeight: "200" }}><ArrowBackIosNewOutlined fontSize="small" sx={{ paddingRight: "5px" }} /> طراحی، توسعه و نگهداری اپلیکیشن‌های وب ریسپانسیو با استفاده از JavaScript (ES6)، React، و TypeScript.</ListItem>
                            <ListItem sx={{ color: "#bdbdbd", fontWeight: "200" }}><ArrowBackIosNewOutlined fontSize="small" sx={{ paddingRight: "5px" }} /> طراحی ریسپانسیو و کار با Bootstrap و Material-UI</ListItem>
                            <ListItem sx={{ color: "#bdbdbd", fontWeight: "200" }}><ArrowBackIosNewOutlined fontSize="small" sx={{ paddingRight: "5px" }} /> آشنایی با فریم‌ورک React.js و توسعه کامپوننت‌های تعاملی</ListItem>
                            <ListItem sx={{ color: "#bdbdbd", fontWeight: "200" }}><ArrowBackIosNewOutlined fontSize="small" sx={{ paddingRight: "5px" }} /> مدیریت نسخه‌ها با Git و تجربه کار در تیم‌های توسعه چابک</ListItem>
                            <ListItem sx={{ color: "#bdbdbd", fontWeight: "200" }}><ArrowBackIosNewOutlined fontSize="small" sx={{ paddingRight: "5px" }} /> همکاری مؤثر با توسعه‌دهندگان بک‌اند و طراحان وب به منظور بهبود تجربه کاربری و پیاده‌سازی نیازهای کسب‌وکار مطابق با انتظارات سهامداران محصول.</ListItem>
                        </List>
                        <Typography variant='body1' >

                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <SkillsCarousel />
            </Grid>
        </Grid>
    )
}

export default About
