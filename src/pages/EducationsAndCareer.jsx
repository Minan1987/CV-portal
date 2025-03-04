import React, { useState } from 'react'
import {
  Grid,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from '@mui/material';
import { SchoolOutlined, ArrowLeftOutlined } from '@mui/icons-material';

const EducationsAndCareer = () => {
  const [open, setOpen] = useState(true);
  const handleClick = () => [
    setOpen(!open)
  ]
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
            <Typography variant='h4' color='orange'>سوابق تحصیلی و شغلی</Typography>
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
          md={12}
          lg={6}
        >
          <Box sx={{ width: "100%", textAlign: "center", pt: 2 }}>
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
            >سوابق تحصیلی
            </Typography>
          </Box>
          <List sx={{
            position: "relative",
            margin: "20px 0 20px 40px",
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
          md={12}
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
            >تجارب حرفه ای
            </Typography>
          </Box>
          <List sx={{
            position: "relative",
            margin: "20px 0 20px 40px",
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
              <ListItemText sx={{ pl: 3 }}>
                <Typography variant="h5" sx={{ fontSize: "1.1rem", pb: "10px" }}>(UI/UX) طراح رابط کاربری </Typography>
                <Typography component="span" sx={{ fontWeight: "400" }}> شرکت فست کلیک (اولین آژانس دیجیتال مارکتینگ ایران) </Typography><br />
                <a href="https://fastclick.agency/" >
                  <Typography component="span"
                    sx={{
                      borderBottom: "1px solid #777",
                      fontSize: "0.8rem",
                      color: '#777'
                    }}
                  >
                    WWW.fastclick.agency
                  </Typography>
                </a>
                <List>
                  <ListSubheader
                    sx={{
                      backgroundColor: "transparent",
                      color: "orange",
                      fontSize: "1rem"
                    }}
                  >
                    وظایف و دستاوردها:
                  </ListSubheader>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  >
                    <ArrowLeftOutlined fontSize='small' /> توسعه و طراحی صفحات وب واکنشگرا با استفاده از ،HTML
                    CSS
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  ><ArrowLeftOutlined fontSize='small' /> مشارکت در طراحی رابط کاربری کاربرپسند و ارائه پیشنهادات
                    برای بهبود تجربه کاربری
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  ><ArrowLeftOutlined fontSize='small' /> همکاری با تیم های توسعه و بازاریابی برای اجرای
                    طراحی های تعاملی که افزایش تعامل کاربران را به همراه
                    داشت.
                  </ListItem>
                </List>
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
                  1395
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1397
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
              <ListItemText sx={{ pl: 3 }}>
                <Typography variant="h5" sx={{ fontSize: "1.1rem", pb: "10px" }}>(UI/UX) طراح رابط کاربری </Typography>
                <Typography component="span" sx={{ fontWeight: "400" }}> IIG(Iran Internet Group) </Typography><br />
                <a href="https://snapp.ir/about/" >
                  <Typography component="span"
                    sx={{
                      borderBottom: "1px solid #777",
                      fontSize: "0.8rem",
                      color: '#777'
                    }}
                  >
                    WWW.snapp.ir
                  </Typography>
                </a>
                <List>
                  <ListSubheader
                    sx={{
                      backgroundColor: "transparent",
                      color: "orange",
                      fontSize: "1rem"
                    }}
                  >
                    وظایف و دستاوردها:
                  </ListSubheader>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  ><ArrowLeftOutlined /> طراحی و توسعه رابط کاربری برای وبسایت com.zoodroom،
                    بهبود تجربه کاربری و افزایش رضایت کاربران
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  ><ArrowLeftOutlined fontSize='small' /> همکاری با تیم های توسعه و بازاریابی برای تعریف نیازهای
                    کاربر و ایجاد راه حل های مناسب.
                  </ListItem>
                  <ListItem
                    sx={{
                      color: "#ccc",
                      fontWeight: "300",
                      fontSize: "0.9rem"
                    }}
                  ><ArrowLeftOutlined fontSize='small' /> ایجاد پروتوتایپها و ماکتهای تعاملی با استفاده از
                    ابزارهای طراحی مانند Figma و XD Adobe.
                  </ListItem>
                </List>
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
                  1398
                </Typography>
                <Typography component="span"
                  sx={{
                    position: "absolute",
                    bottom: "-18px",
                    transform: "translateX(-120%)",
                    color: "#fff"
                  }}
                >
                  1400
                </Typography>
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  )
}

export default EducationsAndCareer
