import React from 'react'
import { Grid, Typography, Box, Divider, List, ListItem, ListItemText } from '@mui/material';
import { SchoolOutlined } from '@mui/icons-material';
import Certificates from './Certificates';

const Educations = () => {
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
            <Typography variant='h4' color='orange'>سوابق تحصیلی</Typography>
            <SchoolOutlined fontSize='large' sx={{ color: "orange" }} />
          </Box>
          <Divider variant='middle'
            sx={{
              "&::before, &::after": {
                borderStyle: 'dashed'
              }
            }}
          />
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <Box sx={{ width: 1, textAlign: "center", pt: 2 }}>
            <Typography variant='h6'
              sx={{
                width: "fit-content",
                margin: "0 auto",
                position: "relative",
                borderBottom: "2px solid orange",
                padding: "5px 10px",
                lineHeight: "1em",
                "&::before, &::after": {
                  position: "absolute",
                  content: '""',
                  width: "2px",
                  height: "5px",
                  bottom: 0,
                  backgroundColor: "orange"
                },
                "&::before": {
                  left: 0
                },
                "&::after": {
                  right: 0
                }
              }}
            >تحصیلات
            </Typography>
          </Box>
          <List sx={{
            position: "relative",
            margin: "20px 0 20px 50px",
            padding: "50px 0 0 0",
            width: 1
          }}>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}>کارشناس ارشد کارآفرینی (روندهای کسب و کار الکترونیکی)<br />
                <Typography component="span"
                  sx={{
                    borderBottom: "1px solid #777",
                    fontSize: "0.8rem",
                    color: '#777'
                  }}
                >دانشگاه تهران - واحد مدیریت کسب و کار
                </Typography>
              </ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1393
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1390
                </Typography>
              </Typography>
            </ListItem>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}>مدرک کارشناسی مهندسی کامپیوتر – گرایش نرم افزار<br />
                <Typography component="span"
                  sx={{
                    borderBottom: "1px solid #777",
                    fontSize: "0.8rem",
                    color: '#777'
                  }}
                >
                  دانشگاه آزاد-واحد فنی و مهندسی تهران جنوب
                </Typography>
              </ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1389
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1384
                </Typography>
              </Typography>
            </ListItem>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}>تحصیلات دبیرستان <br /><Typography component="span"
                sx={{
                  borderBottom: "1px solid #777",
                  fontSize: "0.8rem",
                  color: '#777'
                }}
              >رشته ریاضی-فیزیک</Typography></ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1382
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1380
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Grid>
        <Grid item
          xs={12}
          sm={12}
          md={6}
          lg={6}
        >
          <Box sx={{ width: 1, textAlign: "center", pt: 2 }}>
            <Typography variant='h6'
              sx={{
                width: "fit-content",
                margin: "0 auto",
                position: "relative",
                borderBottom: "2px solid orange",
                padding: "5px 10px",
                lineHeight: "1em",
                "&::before, &::after": {
                  position: "absolute",
                  content: '""',
                  width: "2px",
                  height: "5px",
                  bottom: 0,
                  backgroundColor: "orange"
                },
                "&::before": {
                  left: 0
                },
                "&::after": {
                  right: 0
                }
              }}
            >تجارب
            </Typography>
          </Box>
          <List sx={{
            position: "relative",
            margin: "20px 0 20px 50px",
            padding: "50px 0 0 0",
            width: 1
          }}>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}>گذراندن دوره <Typography component="span" sx={{ fontSize: "bold" }}>React JS</Typography><br />
                <Typography component="span"
                  sx={{
                    borderBottom: "1px solid #777",
                    fontSize: "0.8rem",
                    color: '#777'
                  }}
                >در مجتمع فنی تهران(MFT)
                </Typography>
              </ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1403
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1402
                </Typography>
              </Typography>
            </ListItem>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}> گذراندن دوره وب <br /><Typography component="span" sx={{ fontSize: "bold" }}>Web Design ( HTML, CSS, Javascript )</Typography><br />
                <Typography component="span"
                  sx={{
                    borderBottom: "1px solid #777",
                    fontSize: "0.8rem",
                    color: '#777'
                  }}
                >
                  در مجتمع فنی تهران(MFT)
                </Typography>
              </ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1403
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1402
                </Typography>
              </Typography>
            </ListItem>
            <ListItem sx={{
              position: "relative",
              marginLeft: "10px",
              padding: "20px",
              transition: "all .5s ease-in-out",
              mb: 5
            }}>
              <Typography component="span"
                sx={{
                  width: "2px",
                  height: "100%",
                  backgroundColor: "orange",
                  left: "10px",
                  top: 0,
                  position: "absolute",
                  "&::before, &::after": {
                    content: '""',
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    border: "2px solid orange",
                    position: "absolute",
                    right: "-4px",
                    top: "-10px"
                  },
                  "&::after": {
                    top: "100%"
                  }
                }}
              >
              </Typography>
              <ListItemText sx={{ pl: 3 }}> گذراندن دوره طراحی رابط کاربری <br /><Typography component="span" sx={{ fontSize: "bold" }}>UI/UX Design</Typography><br />
                <Typography component="span"
                  sx={{
                    borderBottom: "1px solid #777",
                    fontSize: "0.8rem",
                    color: '#777'
                  }}
                >
                  در مجتمع فنی تهران(MFT)
                </Typography>
              </ListItemText>
              <Typography component="span"
                sx={{
                  position: "absolute",
                  height: "100%",
                  left: "10px",
                  top: 0
                }}
              >
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    top: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1403
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1402
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Certificates />
    </>
  )
}

export default Educations
