import { Box, Typography } from '@mui/material'
import React from 'react'
import Divider from '@mui/material/Divider';

const Fivehundredk = () => {
  return (
    <Box gap={5} sx={{bgcolor:"#373A3F",display:"flex",justifyContent:"center",alignItems:"center",padding:"50px",
    '@media (max-width: 600px)': {  
      width:"100%",
      display:"flex",
      flexDirection: "row",
      flexWrap: "wrap",
     
    }}}>

       <Box sx={{display: "flex",gap:4}}>
      <Box sx={{display:"flex",flexDirection: "column",justifyContent:"center",
    '@media (max-width: 600px)': {  
      display:"flex",
      justifyContent: "flex-start",
      width: "50%"
     
    }}}>

      <Typography variant='h2' sx={{color:"#FFFFFF"}}>
        500k+

      </Typography>

      <Typography variant='body1' sx={{color:"#FFFFFF",display:"flex",justifyContent:"center",marginBottom:"10px"}}>
        Happy Clients
      </Typography>

      <Divider sx={{bgcolor:"#FFFFFF"}}/>
      </Box>

      <Box sx={{color:"#FFFFFF",display:"flex",flexDirection: "column",alignItems:"center",justifyContent:"center",
    '@media (max-width: 600px)': {  
      display:"flex",
      justifyContent: "flex-end"
     
    }}}>

<Typography variant='h2'>
  3M+

</Typography>

<Typography variant='body1'  sx={{color:"#FFFFFF",display:"flex",justifyContent:"center",marginBottom:"10px"}}>
  Items given a second life

  <Divider sx={{bgcolor:"#FFFFFF"}}/>
</Typography>


</Box>

</Box>

<Box sx={{display:"flex",gap:4}}>

<Box sx={{display:"flex",flexDirection: "column"}}>

<Typography variant='h2' sx={{color:"#FFFFFF"}}>
  40k+

</Typography>

<Typography variant='body1' sx={{color:"#FFFFFF",display:"flex",justifyContent:"center",marginBottom:"10px"}}>
  Compleated Auctions
</Typography>
<Divider  sx={{bgcolor:"#FFFFFF"}}/>
</Box>

<Box sx={{display:"flex",flexDirection: "column"}}>

<Typography variant='h2'sx={{color:"#FFFFFF"}}>
  90%+

</Typography>

<Typography variant='body1'  sx={{display:"flex",justifyContent:"center",color:"#FFFFFF",marginBottom:"10px"}}>
  Sell-through rate
</Typography>
<Divider  sx={{bgcolor:"#FFFFFF"}}/>
</Box>
</Box>
        
    </Box>
  )
}

export default Fivehundredk