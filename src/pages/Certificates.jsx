import { React, useState } from 'react'
import { Grid, Typography, Box, Divider, Card, CardMedia, CardContent, Dialog, DialogContent, IconButton } from '@mui/material';
import { CardMembershipOutlined } from '@mui/icons-material';
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { certificates } from '../components/data/certificateData';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } }
};




const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const handleOpen = (cerfificate) => {
    setSelectedCertificate(cerfificate);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <>
      <Grid container>
        <Grid item
          xs={12}
          sm={12}
          md={12}
          lg={12}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between", p: 3, width: 1 }}>
            <Typography variant='h4' color='orange'>دوره ها و گواهینامه ها</Typography>
            <CardMembershipOutlined fontSize='large' sx={{ color: "orange" }} />
          </Box>
          <Divider variant='middle'
            sx={{
              "&::before, &::after": {
                borderStyle: 'dashed'
              }
            }}
          />
        </Grid>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <Grid container spacing={4} sx={{ padding: "40px" }}>
            {certificates.map((certificate, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() => handleOpen(certificate)}
                  style={{ cursor: "pointer" }}
                >
                  <Card
                    sx={{
                      borderRadius: 3,
                      boxShadow: 3,
                      position: "relative",
                      overflow: "hidden",
                      willChange: "transform",
                      transform: 'perspective(300px) rotateX(0deg) rotateY(0deg)'
                    }}
                  >
                    <CardMedia component="img" height="200" image={certificate.image} alt={certificate.title} />
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#fff",
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {certificate.title}
                      </Typography>
                    </motion.div>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent sx={{ position: "relative", textAlign: "center", backgroundColor: "#121212", color: "#fff" }}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, left: 10, color: "#fff" }}>
            <CloseIcon />
          </IconButton>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {selectedCertificate.title}
              </Typography>
              <img src={selectedCertificate.image} alt={selectedCertificate.title} style={{ width: "100%", borderRadius: 10 }} />
              <Typography variant="body1" sx={{ marginTop: 2 }}>{selectedCertificate.description}</Typography>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Certificates
