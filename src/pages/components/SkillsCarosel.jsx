import React from 'react';
import { Avatar, Box } from '@mui/material';
import { HtmlOutlined } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HTML from '/images/html.png';
import CSS from '/images/css.png';
import react from '/images/reactJS.png';
import bootstrap from '/images/bootstrap.png';
import material from '/images/material.png';
import JavaScript from '/images/javascript.png';

const SkillsCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:2000
  };
  return (
    <Slider {...settings}>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
        <img src={HTML} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
      <img src={CSS} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
      <img src={react} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
      <img src={JavaScript} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
      <img src={material} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
      <Box sx={{display:"flex !important", justifyContent:"center", alignItems:"center"}}>
      <img src={bootstrap} alt='HTML5' style={{width:"150px", height:"150px"}}/>
      </Box>
    </Slider>
  )
}

export default SkillsCarousel
