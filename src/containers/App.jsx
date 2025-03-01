import { React, useState } from 'react';
import MainLayout from '../template/layouts/MainLayout';
import ContentContainer from './ContentContainer';
import SidebarContainer from './SidebarContainer';
import { Sidebar } from '../components/sidebar';
import Page from '../pages/components/Page';
import DrawerActionButton from '../components/drawer/DrawerActionButton'
import Context from '../context/Context';
import { Home, About, Educations, SampleWorks, CareerHostory, Contact } from '../pages';

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
            <Home />
          </Page>
          <Page value={value} index={1}>
            <About />
          </Page>
          <Page value={value} index={2}>
            <Educations />
          </Page>
          <Page value={value} index={3}>
            <CareerHostory />
          </Page>
          <Page value={value} index={4}>
            <SampleWorks />
          </Page>
          <Page value={value} index={5}>
            <Contact />
          </Page>
        </ContentContainer>
      </MainLayout >
    </Context.Provider>
  )
}

export default App
