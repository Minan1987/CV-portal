import React from 'react';
import { Avatar, Box } from '@mui/material';
import { HtmlOutlined } from '@mui/icons-material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { skills } from '../../components/data/skillsData';

const SkillsCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };


  return (
    <Box sx={{ width: "100%", overflow: "hidden" , mb:"20px"}}>
      <Slider {...settings}>
        {
          skills.map((skill, index) => (
            <Box key={index} sx={{ display: "flex !important", justifyContent: "center", alignItems: "center" }}>
              <img src={skill.src} alt={skill.name} style={{ width: "150px", height: "150px" }} />
            </Box>
          ))
        }

      </Slider>
    </Box>

  )
}

export default SkillsCarousel
