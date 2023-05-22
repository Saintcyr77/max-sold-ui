import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/material';


const Icons = () => {
  return (
    <Box sx={{display:"flex",justifyContent:"flex-start",gap:4,marginTop:"25px",marginBottom:"25px"}}>
        <FacebookIcon></FacebookIcon>
        <InstagramIcon></InstagramIcon>
        <TwitterIcon></TwitterIcon>
        <YouTubeIcon></YouTubeIcon>
        <PinterestIcon></PinterestIcon>
        <GoogleIcon></GoogleIcon>
    </Box>
  )
}

export default Icons