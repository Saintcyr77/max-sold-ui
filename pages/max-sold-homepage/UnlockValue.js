import React from 'react'
import { Container,Typography,Box, Grid } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styles from '../../styles/unlock.module.scss'

const UnlockValue = () => {
  return (
    <>
    <Box sx={{display:"flex",gap:2}}>
        <img src="ll.png" className={styles.image}></img>
       
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Box sx={{display:"flex",flexDirection:"row"}}>
            <Typography variant='h5'>
            Maximize your selling potential
           
            </Typography>
            </Box>


            <Typography variant='body1'>
            Decide what you want to sell, we handle the hard<br></br> work of getting it sold.
            </Typography>
        </Box>

        </Box> 
 


    </>
  )
}

export default UnlockValue