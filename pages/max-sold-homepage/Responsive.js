import React, { Component } from "react";
import Slider from "react-slick";
import MediaCard from "./MediaCard";
import { Box } from "@mui/material";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box sx={{gap:2}}>
    
        <Slider {...settings}>
          <div>
            <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
          <div>
          <MediaCard></MediaCard>
          </div>
        </Slider>
        </Box>
    );
  }
}