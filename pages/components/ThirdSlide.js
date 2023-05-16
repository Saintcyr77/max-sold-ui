import * as React from 'react';
import { Box, Container, Divider } from "@mui/material";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import styled from '@emotion/styled';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useContext } from 'react';
import { Context } from '..';
import axios from 'axios';
import { useState } from 'react';


function ThirdSlide(props) {
  const[error,setError] = useState(false);
  let s = props.asklocation
  const value = useContext(Context);

  React.useEffect(()=>{
    console.log("use efeect working");
    async function fetchDropdown(){
     
      const config = {
        headers:{
          "Content-Type": "application/json"
        }
      }
      await axios.get("https://seller-dev.api.maxsold.com/territories",config).then((res)=>{
        
          console.log(res.data);
  //         const countryIds = res.data.map((item) => item.countryId);
  // console.log(countryIds);
      })
    }
    console.log("sartahk");
    fetchDropdown();
  },[])

  return (
    <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"flex-start", width:"80%",margin:"auto",bgcolor:"#FFFFFF",gap:2,}}>
     <Typography variant='h5' component='h5'>
        Verify Auction Location

     </Typography>
     <Typography variant='body1' component='body'>
        Please confirm that the following auction location is correct

     </Typography>
     <TextField id="outlined-basic" label="" variant="outlined" value={props.asklocation} sx={{width:"100%",marginBottom:"20px"}} />
     <Box  sx={{display:"flex",width:"100%",justifyContent:"space-between"}}>
     <Button variant="outlined" href="#contained-buttons" onClick={()=>{
     props.handleBack();
     props.prevFormStep();
     console.log(props.formStep)
     }}>Change Location</Button>
     <Button variant="contained" href="#contained-buttons"  onClick={()=>{
props.handleNext();
props.nextFormStep();
     }}>Confirm</Button>
     </Box>

    </Box>
  )
}

export default ThirdSlide