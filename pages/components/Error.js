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
import { VectorMap } from '@south-paw/react-vector-maps';
import axios from 'axios';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '..';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Errorr(props) {

  // const match = [
    
  //   {"id": "me"},
  //   {"id": "pa"},
  //   {"id": "mi"},
  //   {"id": "ak"},
    
  // ]

  // props.worldLowRes.layers.forEach(element => {
  //    const f = match.find((matchi)=>{
  //     if(element.id===matchi.id){
  //       element.fill = "#419FC4"
  //     }

  //    })
 
    
  // });
  const value = useContext(Context);
const[america,setAmerica] = useState([]);
const dispatch = useDispatch();
const current = useSelector((state)=>state.registration)


async function handleNotify(){

  const config = {
    headers:{
      "Content-Type": "application/json"
    }
  }
  const requestbody = {
    email: value.registrationapi.email
  }
  console.log(value.registrationapi.email);
  await axios.put("https://seller-dev.api.maxsold.com/notify",requestbody,config).then((res)=>{
    console.log(res);
  })
}


  React.useEffect(()=>{
    console.log(value.registrationapi);
    async function fetch(){

      const config = {

        headers:{
          "Content-Type": "application/json"

        }

      }
      await axios.get("https://seller-dev.api.maxsold.com/territories?",config).then((res)=>{
        setAmerica(res.data);
        console.log(res.data)
      })
    }
    
async function postData(){
     
  const config = {
    headers:{
      "Content-Type": "application/json"
    }
  }

  await axios.post("https://seller-dev.api.maxsold.com/registration",current.registrationApi).then((res)=>{
    console.log(res)
  })
}

    postData();   
    fetch();
  },[])

  america.map((usa)=>{
    props.worldLowRes.layers.map((element)=>{
      if(usa.territoryCode===element.id){
        element.fill = "#419FC4"
      }
    })
  })

  props.setDisabled(true);
  
  return (
    <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"flex-start", width:"80%",margin:"auto",bgcolor:"#FFFFFF",gap:2,marginTop:"20px"}}>
        <Typography variant='h6' component='h6' sx={{fontWeight:"bolder"}}>
       {props.asklocation} is out of our service area.
        </Typography>

        <Typography variant='body1'>
        We are expanding our service areas and would be happy to email you<br></br> when our services are available in your region.
        </Typography>

        <VectorMap {...props.worldLowRes} />

        <Typography variant='body1' component='body'>
        MaxSold has Local Expert Help team members in Colorado, Connecticut,<br></br> Georgia, Florida, California, Delaware, Arizona, Illinois, Maryland,<br></br> Massachusetts, Michigan, New Hampshire, New Jersey, New York, Ohio,<br></br> Pennsylvania, South Carolina, Rhode Island, Tennessee, Texas, Virginia,<br></br> West Virginia, Washington, Wyoming.



        </Typography>

        <Button variant='contained' onClick={handleNotify}>Notify me</Button>



    </Box>
    
  )
}

export default Errorr