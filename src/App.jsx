import { React, useState } from 'react'
import MainLayout from './components/layouts/MainLayout'
import Sidebar from './components/Sidebar'
import ContentContainer from './components/ContentContainer'
import TabPanel from './components/tabs/TabPanel'
import { Divider, Typography, Box, List, ListSubheader, ListItem } from '@mui/material'
import { grey, orange } from '@mui/material/colors';
import {CheckCircleRounded} from '@mui/icons-material';

const App = () => {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  }
  return (
    <MainLayout>
      <Sidebar value={value} handleChange={handleChange} />
      <ContentContainer >
        <TabPanel value={value} index={0}>
          <Box variant='h4' sx={{ margin: "30px auto" }}>
            <Divider variant='middle'>توسعه‌دهنده فرانت‌اند<br /><Typography variant='body1' color={grey[500]}>خالق تجربه‌های دیجیتال جذاب</Typography></Divider>
            <Box>
              <Typography variant='body1' >
                مهندس نرم‌افزار با بیش از ۸ سال تجربه در طراحی رابط کاربری و بهینه‌سازی تجربه کاربری، مشتاق فعالیت در حوزه توسعه فرانت‌اند. دارای مدرک کارشناسی مهندسی نرم‌افزار از دانشگاه تهران جنوب و کارشناسی ارشد مدیریت کارآفرینی از دانشگاه تهران.

                <List sx={{m:3}}>
                  <ListSubheader>مهارت‌های فنی شامل:</ListSubheader>
                  <ListItem><CheckCircleRounded sx={{color: orange[300]}} /> توسعه وب با HTML، CSS، JavaScript</ListItem>
                  <ListItem><CheckCircleRounded sx={{color: orange[300]}} /> طراحی ریسپانسیو و کار با Bootstrap و Material-UI</ListItem>
                  <ListItem><CheckCircleRounded sx={{color: orange[300]}} /> آشنایی با فریم‌ورک React.js و توسعه کامپوننت‌های تعاملی</ListItem>
                  <ListItem><CheckCircleRounded sx={{color: orange[300]}} /> مدیریت نسخه‌ها با Git و تجربه کار در تیم‌های توسعه چابک</ListItem>
                  <ListItem><CheckCircleRounded sx={{color: orange[300]}} /> طراحی و بهینه‌سازی UI/UX برای ایجاد تجربه کاربری بهتر</ListItem>
                </List>
                دارای گواهینامه‌های تخصصی Web Design و React.js از مجتمع فنی تهران. به دنبال فرصت‌های شغلی در شرکت‌های بزرگ برای رشد و ارتقای مهارت‌های فنی در محیطی پویا و نوآورانه هستم.
              </Typography>
            </Box>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Divider>دوره ها و گواهینامه ها</Divider>

        </TabPanel>
        <TabPanel value={value} index={2}>
          <Divider>سوابق تحصیلی</Divider>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Divider>سوابق شغلی</Divider>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Divider>نمونه کارها</Divider>
        </TabPanel>

      </ContentContainer>
    </MainLayout>
  )
}

export default App
