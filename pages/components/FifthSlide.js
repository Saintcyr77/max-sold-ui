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
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '..';
import TryCatchError from './TryCatchError';
import { useState } from 'react';
import registrationSlice,{reduxwalanaam}  from '../Store/Slices/UserSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function FifthSlide(props) {
  const current = useSelector((state)=>state.registration)
  console.log(current);
  const[error,setError] = useState(false);
  const value = useContext(Context);
  console.log("outside");
  React.useEffect(()=>{
    // console.log(JSON.stringify(value.registrationapi));
    console.log(current.registrationApi);
    

    async function postData(){
     
    const config = {
      headers:{
        "Content-Type": "application/json"
      }
    }

     try{

       await axios.post("https://seller-dev.api.maxsold.com/registration",current.registrationApi).then((res)=>{
         console.log(res)
       })
     }
     catch(error){
       console.log("erroe")
       setError(true);
     }
    // await axios.post('https://incorrect-api-url', value.registrationapi).then((res) => {
    //   console.log(res);
    // });

  }
  postData();

  },[])

  return (
    <>
    {error===true?<TryCatchError></TryCatchError>:
    <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"flex-start", width:"80%",margin:"auto",bgcolor:"#FFFFFF",gap:2,marginTop:"40px"}}>

      
<Box sx={{display:"flex",flexDirection:"row",gap:2}}>
<Typography variant='h4' component='h4'>
            Thank you for submitting your information!
        </Typography>

</Box>


        <Typography varient='body1' component='body1'>
        Our team will call you within 24 business hours. If you would like <br></br> to speak to a team member immediately, please call us at 833 <br></br>-MAX-SOLD.

        </Typography>
        <Button variant="contained" href="#contained-buttons">Explore MaxSold.com</Button>

    </Box>
}
    </>
  )
}

export default FifthSlide