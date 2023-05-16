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
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Component, useState } from 'react'
import { useContext } from 'react';
import { Context } from '..';
import { date } from 'yup';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import registrationSlice,{reduxwalanaam} from '../Store/Slices/UserSlice';

function FourthSlide(props) {
  const dispatch = useDispatch();
  const current = useSelector((state)=>state.registration)
  const value = useContext(Context);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isError, setIsError] = useState(false);
  const theme = useTheme();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsError(false);
  };

  const handleSubmit = () => {
    if (selectedDate === null) {
      setIsError(true); // set error state if user submits without selecting a date
      return;
    }
    const currentDate = new Date(); // get the current date
  if (selectedDate < currentDate) { // check if the selected date is before the current date
    setIsError(true); // set error state if selected date is in the past
  } else {
    setSelectedDate(selectedDate);
    setIsError(false);
    props.handleNext();
    props.nextFormStep();
    // value.setRegistrationApi((prevState) => ({
    //   ...prevState,
    //   soldBy: selectedDate
      
    // }));
    dispatch(reduxwalanaam({
      ...current.registrationApi,
      soldBy: selectedDate
      
  }));
  }
  // props.nextFormStep();
    
   
  };
  const today = new Date();

  return (
    <Box sx={{display:"flex" ,flexDirection:"column",justifyContent:"center",alignItems:"flex-start", width:"80%",margin:"auto",bgcolor:"#FFFFFF",gap:2,}}>
      
        <Typography variant='h6' component='h6' sx={{fontWeight:"bolder"}}>
            When do you need everything sold by?
        </Typography>
        <Typography variant='body1' component='body'>
        To best support you, please provide the last safe date for your auction <br></br> pickup event to be completed. If no timeline constraint exists, a best<br></br> guess will suffice. We acknowledge this date may change depending<br></br> on your individual circumstances.

        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker value={selectedDate}  disablePast onChange={handleDateChange}/>
    </LocalizationProvider>
    {isError && (
        <Typography variant="caption" color={theme.palette.error.main} sx={{ mt: 1 }}>
          You should only enter feasable date
        </Typography>
      )}
    <Button variant="contained" href="#contained-buttons" sx={{width:"200px"}} onClick={handleSubmit}>Submit</Button>



    </Box>
    
  )
}

export default FourthSlide