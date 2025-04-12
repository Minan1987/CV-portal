import React, { useEffect, useState } from 'react';
import { Grid, Typography, Box, Divider, Card, CardMedia, CardContent, CardActionArea, Slide } from '@mui/material';
import { DevicesOutlined } from '@mui/icons-material';
import { motion } from "framer-motion";
import { sampleWorks } from '../components/data/sampleWorkData'
import { Helmet } from 'react-helmet-async';
const SampleWorks = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return (() => setLoading(false))
  }, [])

  return (
    <Grid container>
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <Grid item
        xs={12}
        sm={12}
        md={12}
        lg={12}
      >
        <Box sx=
          {{
            display: "flex",
            justifyContent: "space-between",
            p: 3,
            pt: {
              md: 3,
              xs: "75px"
            },
            width: 1
          }}>
          <Typography sx={{
            fontSize: {
              xs: '1.5rem',
              md: '2.125rem',
            },
          }} color='orange'>نمونه کارها</Typography>
          <DevicesOutlined fontSize='large' sx={{ color: "orange" }} />
        </Box>
        <Divider variant='middle'
          sx={{
            "&::before, &::after": {
              borderStyle: 'dashed'
            }
          }}
        />
      </Grid>
      <Grid container spacing={4} sx={{ padding: "40px" }}>
        {sampleWorks.map((sampleWork, index) => (
          <Slide direction='up' in={loading}
            style={{ transformOrigin: '0 0 0' }}
            {...(loading ? { timeout: 1500 } : {})} key={index}
          >
            <Grid item xs={12} sm={6} md={4} >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 3,
                    bgcolor: "#212121 !important",
                    border: "1px solid #000",
                    "--Paper-overlay": "none !important"
                  }}
                >
                  <CardActionArea component="a" href={sampleWork.link} target="_blank">
                    <CardMedia component="img" height="200" image={sampleWork.image} alt={sampleWork.title} />
                    <CardContent
                      sx={{
                        bgcolor: "#212121",
                        width: "85%",
                        height: "168px",
                        margin: "0 auto",
                        position: "relative",
                        mt: "-40px",
                        textAlign: "center",
                        padding: "28px 16px 36px"
                      }}>
                      <Typography variant="caption" color="text.secondary">{sampleWork.date}</Typography>
                      <Typography variant="body2" >{sampleWork.title}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </motion.div>
            </Grid>
          </Slide >
        ))}
      </Grid>
    </Grid>
  )
}

export default SampleWorks
