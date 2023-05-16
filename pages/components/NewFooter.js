import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import { Grid, Box,Container, Typography, Stack, Button } from '@mui/material'
function NewFooter() {
  return (
    <Box sx={{marginTop:"40px"}}>
    <Box sx={{display:"flex",justifyContent:"space-between"}}>
        <Box>
        <img src = "logo.png" width="200px"></img>
        </Box>

        <Box sx={{display:"flex",flexDirection:"row",gap:2}}>

        <Typography variant='h5' sx={{marginTop:"20px"}}>
         Are you looking to sell

        </Typography>

        <Button variant="outlined" color="error" sx={{height:"5vh",marginTop:"20px"}}>
  Sell
</Button>
        </Box>



    </Box>
    < Grid container columnGap={1} justifyContent={"space-around"} alignItems={"flex-start"} marginBottom={4} marginTop={4}>

        <Grid item md={2}>
            <Typography varient="overline" gutterBottom sx={{fontWeight:"bolder"}}>
                Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Trending Auctions
            </Typography>

            <Typography varient="overline" marginBottom={18} > 
                Past Auctions
            </Typography>

            {/* <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <PinterestIcon></PinterestIcon>
        <InstagramIcon></InstagramIcon>
        <GoogleIcon></GoogleIcon> */}

<Stack direction="row" spacing={6}>
      <FacebookIcon></FacebookIcon>
        <TwitterIcon></TwitterIcon>
        <PinterestIcon></PinterestIcon>
        <InstagramIcon></InstagramIcon>
        <GoogleIcon></GoogleIcon>
  
</Stack>
        </Grid>

        <Grid item md={2}>
        <Typography varient="overline" gutterBottom sx={{fontWeight:"bolder"}}>
                Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Trending Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
        </Grid>


        <Grid item md={2}>
        <Typography varient="overline"  gutterBottom sx={{fontWeight:"bolder"}}>
                Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Trending Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
        </Grid>

        <Grid item md={2}>
        <Typography varient="overline"  gutterBottom sx={{fontWeight:"bolder"}}>
                Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Trending Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
        </Grid>

        <Grid item md={2}>
        <Typography varient="overline"  gutterBottom sx={{fontWeight:"bolder"}}>
                Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Trending Auctions
            </Typography>

            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>
            <Typography varient="overline" marginBottom={2}>
                Past Auctions
            </Typography>

            
        </Grid>


    </Grid>
    </Box>
  )
}

export default NewFooter