import React from 'react'
import styles from '../../styles/finalbar.module.css'
import { Box, Typography } from '@mui/material'
function Finalbar() {
  return (
     <Box sx={{display:"flex",gap:2, justifyContent:"center",bgcolor:"black"}}>

      <Typography variant='body1' sx={{color:"white"}}>
        Terms & Conditions
      </Typography>

      <Typography variant='body1' sx={{color:"white"}}>
        Privacy Policy
      </Typography>

      <Typography variant='body1' sx={{color:"white"}}>
        Legal Disclaimer
      </Typography>

      

     </Box>
  )
}

export default Finalbar