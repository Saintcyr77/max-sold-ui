import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import styles from '../../styles/mediacard.module.scss'
export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300, height:"500px" , borderRadius:"22px" }}>
      <Grid container spacing={1}>

       <Grid item xs={6}>
 
      <CardMedia
        sx={{ height: 280 }}
        image="antique.jpg"
        title="green iguana"
      />
       </Grid>
       
       <Grid item xs={6}>
       <Grid item xs={12}>
 
 <CardMedia
   sx={{ height: 140, marginBottom:"1px" }}
   image="antique2.jpg"
   title="green iguana"
 />
  </Grid>

  <Grid item xs={12}>
 
 <CardMedia
   sx={{ height: 140 }}
   image="antique3.jpg"
   title="green iguana"
 />
  </Grid>
          

       </Grid>

       

      </Grid>
      <CardContent sx={{'@media (max-width: 600px)':{
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start"
       }}}>
        <Typography gutterBottom variant="h5" component="div" className={styles.font}>
          Downsizing
        </Typography>
        <Typography variant="body2" color="text.secondary"  className={styles.font} sx={{ '@media (max-width: 600px)':{
        fontSize: "small",
       }}}>
          Kingston(Ontario,Canada)
        </Typography>
        <Typography variant="body2" color="text.secondary"  className={styles.font}>
          SELLER MANAGED
        </Typography>
        <Typography variant="body2" color="text.secondary"  className={styles.font}>
          Downsizing Online Auction-
        </Typography>
        <Typography variant="body2" color="text.secondary"  className={styles.font}>
          Brackenwood Crescent
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}