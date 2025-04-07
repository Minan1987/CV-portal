import { React, useState } from 'react';
import MainLayout from '../template/layouts/MainLayout';
import ContentContainer from './ContentContainer';
import SidebarContainer from './SidebarContainer';
import { Sidebar } from '../components/sidebar';
import Page from '../pages/components/Page';
import DrawerActionButton from '../components/drawer/DrawerActionButton'
import Context from '../context/Context';
import { Home, About, SampleWorks, Contact, EducationsAndCareer, CoursesAndCertification } from '../pages';

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
        <DrawerActionButton />

        {/* ----Main Section---- */}
        <ContentContainer >
          <Page value={value} index={0}>
            <Home helmetTitle="پورتال شخصی مینا نظری|صفحه اصلی" />
          </Page>
          <Page value={value} index={1}>
            <About helmetTitle="پورتال شخصی مینا نظری|درباره من" />
          </Page>
          <Page value={value} index={2}>
            <EducationsAndCareer helmetTitle="پورتال شخصی مینا نظری|سوابق تحصیلی و شغلی" />
          </Page>
          <Page value={value} index={3}>
            <CoursesAndCertification helmetTitle="پورتال شخصی مینا نظری|دوره ها و گواهینامه ها" />
          </Page>
          <Page value={value} index={4}>
            <SampleWorks helmetTitle="پورتال شخصی مینا نظری|نمونه کارها" />
          </Page>
          <Page value={value} index={5}>
            <Contact helmetTitle="پورتال شخصی مینا نظری|تماس با من" />
          </Page>
        </ContentContainer>

      </MainLayout >
    </Context.Provider>
  )
}

export default App
