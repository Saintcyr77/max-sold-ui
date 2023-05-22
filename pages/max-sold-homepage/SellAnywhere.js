import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'

const SellAnywhere = () => {
  return (
   
    <Box sx={{display:"flex",justifyContent:"space-between",marginTop:"60px"}}>
        <Box >

        <img src="maxmax.png" alt="maxmax"></img>
        </Box>

        <Box sx={{display:"flex",gap:2,width:"420px"}}>
            <Typography variant='body1' sx={{whiteSpace:"no-wrap"}}>
                Are you looking to sell 
            </Typography>

            <Button variant='button' display="block" sx={{padding:"5px",minWidth:"50%",height:"30px",borderColor:"blue !important"}}>
                Sell

            </Button>

        </Box>

    </Box>
  )
}

export default SellAnywhere