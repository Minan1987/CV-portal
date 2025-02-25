import React from 'react';
import { Grid, Typography, Box, Divider, List, ListItem, ListSubheader } from '@mui/material';
import {
    PersonOutlineOutlined,
    ArrowBackIosNewOutlined,
    MailOutlineOutlined,
    PhonelinkRingOutlined,
    FmdGoodOutlined,
    LanguageOutlined,
    LinkedIn
} from '@mui/icons-material';
import { grey, orange } from '@mui/material/colors';
import SkillsCarousel from './components/SkillsCarosel';


const About = () => {
    return (
        <Grid container>
            <Grid item
                xs={12}
                sm={12}
                md={12}
                lg={12}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: 1 }}>
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
                md={8}
                lg={8}
            >
                <Box variant='h4' sx={{ p: 3 }}>
                    <Typography variant='h6' sx={{ pb: "15px" }}>توسعه‌دهنده جونیور فرانت‌اند </Typography>
                    <Box>
                        <Typography variant='body1' color={grey[400]}>مهندس نرم‌افزار با بیش از ۸ سال تجربه در طراحی رابط کاربری (UI) و بهینه‌سازی تجربه کاربری (UX)، مشتاق فعالیت در حوزه توسعه فرانت‌اند و خلق تجربه‌های دیجیتال کاربرپسند هستم. دارای مدرک کارشناسی مهندسی نرم‌افزار از دانشگاه تهران جنوب و کارشناسی ارشد مدیریت کارآفرینی از دانشگاه تهران. همچنین، با گذراندن دوره‌های تخصصی Web Design و React.js در مجتمع فنی تهران، دانش خود را در زمینه توسعه وب مدرن به‌روز نگه داشته‌ام.<br />

                            علاقه‌مند به کار در تیم‌های چابک و نوآورانه برای طراحی و پیاده‌سازی رابط‌های کاربری تعاملی، بهینه‌سازی عملکرد وب‌سایت‌ها و ارائه راه‌حل‌های خلاقانه در توسعه فرانت‌اند هستم. با تسلط بر HTML، CSS، JavaScript، React.js و فریم‌ورک‌های طراحی همچون Material-UI و Bootstrap، همواره به دنبال یادگیری فناوری‌های جدید و ارتقای مهارت‌های فنی خود در یک محیط پویا و پیشرو هستم.<br />

                            هدف من: همکاری با شرکت‌های بزرگ و تیم‌های حرفه‌ای برای خلق تجربه‌های کاربری بهینه و کمک به رشد و تحول دیجیتال کسب‌وکارها.
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
                md={4}
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
                            <LanguageOutlined fontSize='medium' sx={{ color: "orange" }} />
                        </Typography>
                        <Typography variant='body1' component="span" color={grey[400]}>
                            <a href='https://graphicalweb.ir/' target='_blank' style={{ color: "#bdbdbd", textDecoration: "none" }}>graphicalweb.ir</a>
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
                lg={12}
            >
                <SkillsCarousel />
            </Grid>
        </Grid>
    )
}

export default About
