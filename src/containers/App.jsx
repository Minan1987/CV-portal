import { React, useState } from 'react';
import MainLayout from '../template/layouts/MainLayout';
import ContentContainer from './ContentContainer';
import SidebarContainer from './SidebarContainer';
import { Sidebar } from '../components/sidebar';
import Page from '../pages/Page';
import {
  Divider,
  Typography,
  Box,
  List,
  ListSubheader,
  ListItem
} from '@mui/material';
import { grey, orange } from '@mui/material/colors';
import { CheckCircleRounded } from '@mui/icons-material';
import Context from '../context/Context';
import { Home } from '../pages';


const App = () => {
  const [value, setValue] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <Context.Provider value={{ value, handleChange, drawerOpen, setDrawerOpen }}>
      <MainLayout>

        {/* ----Sidebar Section---- */}
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>

        {/* ----Main Section---- */}
        <ContentContainer >
          <Page value={value} index={0}>
            <Home />
          </Page>
          <Page value={value} index={1}>
            <Box variant='h4' sx={{ margin: "30px auto" }}>
              <Divider variant='middle'>توسعه‌دهنده فرانت‌اند<br /><Typography variant='body1' color={grey[500]}>خالق تجربه‌های دیجیتال جذاب</Typography></Divider>
              <Box>
                <Typography variant='body1' >
                  مهندس نرم‌افزار با بیش از ۸ سال تجربه در طراحی رابط کاربری و بهینه‌سازی تجربه کاربری، مشتاق فعالیت در حوزه توسعه فرانت‌اند. دارای مدرک کارشناسی مهندسی نرم‌افزار از دانشگاه تهران جنوب و کارشناسی ارشد مدیریت کارآفرینی از دانشگاه تهران.
                </Typography>
                <List sx={{ m: 3 }}>
                  <ListSubheader>مهارت‌های فنی شامل:</ListSubheader>
                  <ListItem><CheckCircleRounded sx={{ color: orange[300] }} /> توسعه وب با HTML، CSS، JavaScript</ListItem>
                  <ListItem><CheckCircleRounded sx={{ color: orange[300] }} /> طراحی ریسپانسیو و کار با Bootstrap و Material-UI</ListItem>
                  <ListItem><CheckCircleRounded sx={{ color: orange[300] }} /> آشنایی با فریم‌ورک React.js و توسعه کامپوننت‌های تعاملی</ListItem>
                  <ListItem><CheckCircleRounded sx={{ color: orange[300] }} /> مدیریت نسخه‌ها با Git و تجربه کار در تیم‌های توسعه چابک</ListItem>
                  <ListItem><CheckCircleRounded sx={{ color: orange[300] }} /> طراحی و بهینه‌سازی UI/UX برای ایجاد تجربه کاربری بهتر</ListItem>
                </List>
                <Typography variant='body1' >
                  دارای گواهینامه‌های تخصصی Web Design و React.js از مجتمع فنی تهران. به دنبال فرصت‌های شغلی در شرکت‌های بزرگ برای رشد و ارتقای مهارت‌های فنی در محیطی پویا و نوآورانه هستم.
                </Typography>
              </Box>
            </Box>
          </Page>
          <Page value={value} index={2}>
            <Divider>دوره ها و گواهینامه ها</Divider>
          </Page>
          <Page value={value} index={3}>
            <Divider>سوابق تحصیلی</Divider>
          </Page>
          <Page value={value} index={4}>
            <Divider>سوابق شغلی</Divider>
          </Page>
          <Page value={value} index={5}>
            <Divider>نمونه کارها</Divider>
          </Page>
        </ContentContainer>
      </MainLayout >
    </Context.Provider>
  )
}

export default App
