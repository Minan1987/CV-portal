import { Box } from "@mui/material";

const TabPanel = (props) => {
    const { children, value, index, ...others } = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`sidebar-tab-${index}`}
            {...others}
            sx={{height:"100vh", overflowY:"auto"}}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </Box>
    );
};

export default TabPanel;
