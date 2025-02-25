import { createTheme } from "@mui/material";
export const themeRTL = createTheme({
    direction: "rtl",
    palette: {
        mode: 'dark',
      },
    typography: {
        fontFamily: [
            'vazir',
            'tahoma',
            'Roboto',
            'Arial'
        ].join(',')
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
           @font-face {
                font-family: 'vazir';
                font-style: normal;
                font-display: swap;
                font-weight: 400;
                src: url('/fonts/Vazir.woff2') format('woff2'),
                     url('/fonts/Vazir.woff') format('woff');
        }
          `,
        },
    },
})
