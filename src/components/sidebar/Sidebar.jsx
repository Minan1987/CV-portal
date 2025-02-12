import React from 'react'
import { SidebarContent } from './';
import SidebarDrawer from '../drawer/SidebarDrawer';
import DrawerActionButton from '../drawer/DrawerActionButton';

const Sidebar = ({ value, handleChange, setDrawerOpen, drawerOpen }) => {
    return (
        <>
            <DrawerActionButton setDrawerOpen={setDrawerOpen} />
            <SidebarContent value={value} handleChange={handleChange} />
            <SidebarDrawer
                drawerOpen={drawerOpen}
                value={value}
                handleChange={handleChange}
                setDrawerOpen={setDrawerOpen}
            />
        </>
    )
}

export default Sidebar
