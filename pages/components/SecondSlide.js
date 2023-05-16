import React, {useEffect} from 'react';
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
import MobileStepper from '@mui/material/MobileStepper';
import axios from 'axios';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

const names2=[
    'Alabama',
    'Montgomery',
    'Alaska',
    'Juneau',
    'Arizona',
    'Phoenix',
    'Arkansas',
    'Little Rock',
    'California',
    'Sacramento',
    'Colorado',
    'Denver',
    'Connecticut',
    'Hartford',
    'Delaware'
];

function getStyles(name, personName, theme) {

  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
function SecondSlide(props) {

  const[dropdown,setDropdown] = useState([]);
 
  useEffect(()=>{
    console.log("use efeect working");
    async function fetchDropdown(){
     
      const config = {
        headers:{
          "Content-Type": "application/json"
        }
      }
      await axios.get("https://seller-dev.api.maxsold.com/territories",config).then((res)=>{
          setDropdown(res.data);
          console.log(res.data);
      })
    }
    fetchDropdown();
  },[])

 
  

  
    const[hide,setHide] = React.useState(false);

    const [alignment, setAlignment] = React.useState('web');

    // const handleChangee = (newAlignment) => {
    //     console.log(newAlignment);
    //   setAlignment(newAlignment);
    //   setHide(true);
    // };
  
    const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const value = event.target.value;
    setPersonName(
      // On autofill we get a stringified value.
      // typeof value === 'string' ? value.split(',') : value,
      value

    );
    props.setStateValues(value);
    props.setAskLocation(value);
  };


  return (


<Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"flex-start",height:"100vh", width:"100%",bgcolor:"#FFFFFF",gap:2,marginTop:"-50px"}}>

 <Typography variant='body' component='body' sx={{alignSelf:"flex-start"}}>
    Where are your items located
</Typography>   
<ToggleButtonGroup sx={{display:"flex",flexDirection:"column",gap:2}}
  color="primary"
  value={alignment}
  exclusive
  onChange={((event)=>{
    setAlignment(event.target.value);
    console.log(alignment);
    setHide(true);
  })}
  aria-label="Platform"
>
  <ToggleButton value="CANADA" sx={{width:"350px",border:"1px solid #FFFFFF"}}>Canada</ToggleButton>
  <ToggleButton value="Us" sx={{width:"350px",border:"1px solid #FFFFFF"}}>United States of America</ToggleButton>
</ToggleButtonGroup>

     {hide==true?
     
     <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Select</InputLabel>
       {alignment==='CANADA'?<Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              
              {name}
            </MenuItem>
          ))}
        </Select>:<Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names2.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
          
              {name}
            </MenuItem>
          ))}
        </Select>}
      </FormControl>:<div></div>}
      <Button variant="contained" href="#contained-buttons" onClick={()=>{
         props.setSecondHide(true);
         props.setFormStep(2);
         props.handleNext();
      }}>Next</Button>
</Box>



  )
}

export default SecondSlide