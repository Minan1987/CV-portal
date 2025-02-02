import { ThemeProvider } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';
import { CssBaseline } from "@mui/material";
import { prefixer } from "stylis";
import rtlPlugin from 'stylis-plugin-rtl';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { theme } from '../ui/Theme';

export const cacheRTL = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin]
})

const MainLayout = ({ children }) => {
    return (
        <CacheProvider value={cacheRTL}>
            <ThemeProvider theme={theme}>
                <HelmetProvider>
                    <Helmet>
                        <title>پورتال شخصی مینا نظری</title>
                    </Helmet>
                    <CssBaseline />
                    {children}
                </HelmetProvider>
            </ThemeProvider>
        </CacheProvider>
    )
}

export default MainLayout