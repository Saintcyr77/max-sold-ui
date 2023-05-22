import React from 'react'
import { Box, Typography } from '@mui/material'
import styles from '../../styles/ACP.module.scss'

const ACP = () => {
  return (
   <Box className="responsive-ui" sx={{display:"flex",justifyContent:"space-between"}}>

    <Box sx={{display:"flex",flexDirection:"column",gap:1}}>
        <Typography>
        Auctions
        </Typography>

        <Typography>
        Trending Auctions
        </Typography>

        <Typography>
        Past Auctions
        </Typography>
        
    </Box>

    <Box  sx={{display:"flex",flexDirection:"column",gap:1}}>
    <Typography>
        Categories
        </Typography>

        <Typography>
        Arts & Collectibles
        </Typography>

        <Typography>
        Comics
        </Typography>

        <Typography>
        Furniture
        </Typography>


        <Typography>
        Home - indoor
        </Typography>

        <Typography>
        Musical Instruments
        </Typography>

        <Typography>
        Browse More
        </Typography>
    </Box>

    <Box  sx={{display:"flex",flexDirection:"column",gap:1}}>
    <Typography>
        Partners
        </Typography>

        <Typography>
        Our Partners
        </Typography>

        <Typography>
        Enterprise Partners
        </Typography>
    </Box>

    <Box  sx={{display:"flex",flexDirection:"column",gap:1}}>
        <Typography>
            Resources
        </Typography>

        <Typography>
        Newsroom
        </Typography>

        <Typography>
        Careers
        </Typography>
    </Box>

    <Box  sx={{display:"flex",flexDirection:"column",gap:1}}>
    <Typography>
        Other Links
        </Typography>

        <Typography>
        About
        </Typography>

        <Typography>
        Blog
        </Typography>

        <Typography>
        Locations
        </Typography>

        <Typography>
        Contact Us
        </Typography>

        <Typography>
        Sell on MaxSold
        </Typography>
    </Box>
   </Box>
  )
}

export default ACP