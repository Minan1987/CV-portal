import { Grid, ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { CssBaseline } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';
import { HelmetProvider } from "react-helmet-async";

import { themeRTL } from '../themes/Theme';

import Grid2 from '@mui/material/Grid2';

export const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={themeRTL}>
                <HelmetProvider>
                    
                    <CssBaseline />
                    <Grid container >
                        {children}
                    </Grid>
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout