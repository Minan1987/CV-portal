import { createContext } from "react";
export default createContext({
    value: 0,
    handleChange: () => { },
    drawerOpen: false,
    setDrawerOpen: () => { }
})
