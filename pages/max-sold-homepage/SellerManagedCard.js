import { Typography, Divider, Box, Button } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SellerManagedCard = () => {
  return (
   <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"row",gap:4, height:"500px",marginBottom:"20px",
   '@media (max-width: 600px)': {  
    display:"flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    height: "100%"
    
   
  }}}>

  
    <Card sx={{ minWidth: 275, borderRadius:"10px",height:"90%",borderTop: "10px solid black",
   '@media (max-width: 600px)':{
    minWidth: 175,
    margin: "0px 20px",
    height:"80%"
   }}}>
    <CardContent sx={{display:"flex",flexDirection:"column",gap:1}}>

        <Typography varient="body1" sx={{fontWeight:"bolder"}}>
        Seller Managed
        </Typography>

        <Typography varient="body1">
        Take charge of your sale with our self- <br></br>managed DIY solution.
        </Typography>

        <Divider/>
        <Typography varient="body1">
        Set up your sale with our app
        </Typography>

        <Typography varient="body1">
        Choose the pickup day that works for you
        </Typography>

        <Typography varient="body1">
        We handle all the payments and provide you <br></br> with one lump sum

        </Typography>

        <Typography varient="body1">
        All buyers pay before being scheduled for <br></br> pickup day

    
        </Typography>

        <Typography varient="body1">
        We promote your auction online to our buyers<br></br> in your area
    
        </Typography>
        

    </CardContent>   

     </Card>   

     <Card sx={{ minWidth: 275, borderRadius:"10px",height:"90%",borderTop: "10px solid #409EC4",
    '@media (max-width: 600px)':{
      minWidth: 175,
      margin: "0px 20px",
      height: "80%"
     } }}>
    <CardContent sx={{display:"flex",flexDirection:"column",gap:1}}>

        <Typography varient="body1" sx={{fontWeight:"bolder"}}>
        MaxSold Managed
        </Typography>

        <Typography varient="body1">
        Take charge of your sale with our self- <br></br>managed DIY solution.
        </Typography>

        <Button varient="contained" sx={{bgcolor:"red" ,color:"white", width:"50%",padding:"0px"}}>
            Popular

        </Button>

        <Divider/>
        <Typography varient="body1">
        Set up your sale with our app
        </Typography>

        <Typography varient="body1">
        Choose the pickup day that works for you
        </Typography>

        <Typography varient="body1">
        We handle all the payments and provide you <br></br> with one lump sum

        </Typography>

        <Typography varient="body1">
        All buyers pay before being scheduled for <br></br> pickup day

    
        </Typography>

        <Typography varient="body1">
        We promote your auction online to our buyers<br></br> in your area
    
        </Typography>
        

    </CardContent>   

     </Card>  
    

   </Box>
  )
}

export default SellerManagedCard