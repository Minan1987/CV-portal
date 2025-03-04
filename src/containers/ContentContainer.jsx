import { Grid } from '@mui/material';
import { grey } from '@mui/material/colors';

const ContentContainer = ({ children }) => {
    return (
        <Grid item
            sx={{
                backgroundColor: grey[900],
                scrollbarWidth: "none"
            }}
            xs={12}
            sm={12}
            md={9}
            lg={10}
            xl={10}
        >
            {children}
        </Grid>
    )
}

export default ContentContainer
