import Grid2 from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';

const ContentContainer = ({ children }) => {
    return (
        <Grid2 sx={{ backgroundColor: grey[300] }}
        size={{
            xs:12,
            sm:12,
            md:9,
            lg:10,
            xl:10,
        }}
        >
            {children}
        </Grid2 >
    )
}

export default ContentContainer
