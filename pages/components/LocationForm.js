import React, {  useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Context } from "..";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import registrationSlice,{reduxwalanaam} from '../Store/Slices/UserSlice';
import {
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import TryCatchError from "./TryCatchError";
const LocationForm = (props) => {
  const[error,setError] = useState(false);
  React.useEffect(()=>{
   console.log(value);
  },[])
  const [state, setState] = useState([]);
  const[alignment,setAlignment] = useState("");
  const [isError, setIsError] = useState(true);
  const [personName, setPersonName] = useState([]);
  const [isCanadaClicked, setCanadaClicked] = useState(false);
  const [isUsaClicked, setUsaClicked] = useState(false);
  const[isClicked,setClicked] = useState(true);
  const[disabled,setDisabled] = useState(false);
  const value = useContext(Context);
  const current = useSelector((state)=>state.registration);
  console.log(current.registrationApi);
  const canadaHandleClick = () => 
  {
    setAlignment("CANADA");
    setState(2);
    setCanadaClicked(true);
    setUsaClicked(false);
    setIsError(false);
  };
  const usaHandleClick = () => {
    setAlignment("UNITED STATES OF AMERICA")
    setState(1);
    setIsError(false);
    setCanadaClicked(false);
    setUsaClicked(true);
  };
  const { register, handleSubmit } = useForm();
  const handle = (event)=>{
    setPersonName(event.target.value)
                props.setAskLocation(event.target.value);
                setDisabled(true);
  }
  const names1 = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Georgia",
    "Illinois",
    "Kansas",
    "Kentucky",
  ];
  const names2 = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "Ontario",
    "Quebec",
    "Nova Scotia",
    "Newfoundland and Labrador",
    "Prince Edward Island"
  ];

  const[dropdown,setDropdown] = useState([]);
 
  React.useEffect(()=>{
    console.log("use efeect working");
    async function fetchDropdown(){
     
      const config = {
        headers:{
          "Content-Type": "application/json"
        }
      }
      try{
        
        await axios.get("https://seller-dev.api.maxsold.com/territories",config).then((res)=>{
            setDropdown(res.data);
            console.log(res.data);
    //         const countryIds = res.data.map((item) => item.countryId);
    // console.log(countryIds);
        })
      }
      catch(error){
        console.log("error");
      }
      }
    console.log("sartahk");
    fetchDropdown();
  },[])
  const dispatch = useDispatch()
  console.log(dispatch.registrationSlice);

  const handleTerritorySelect = (name) => {
    // value.setRegistrationApi((prevState) => ({
    //   ...prevState,
    //   territoryId: name.territoryId,
    //   countryId: name.countryId,
    //   countryName: name.territoryName
    // }));
    dispatch(reduxwalanaam({
        ...current.registrationApi,
        territoryId: name.territoryId,
        countryId: name.countryId,
        countryName: name.territoryName
    }));

    props.setServing(name.isServing);
    props.setTerritory(name.countryId);
  };
  
  return (
    <>
  {error===true?<TryCatchError></TryCatchError>:
    <Box
      sx={{
        width: "80%",
        margin: " 20px auto",
        marginTop: "15px",
        "& .MuiButtonBase-root": {
          marginBottom: "15px",
        },
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ fontWeight: "bolder" }}>
        Where are your items located?
      </Typography>
      <Button
        fullWidth
        variant={isCanadaClicked ? "contained" : "outlined"}
        size="large"
        sx={{ p: 1.5 }}
        onClick={canadaHandleClick}
      >
        Canada
      </Button>
      <Button
        fullWidth
        variant={isUsaClicked ? "contained" : "outlined"}
        size="large"
        sx={{ p: 1.5 }}
        onClick={usaHandleClick}
      >
        United States of America
      </Button>
      
       
      {isCanadaClicked || isUsaClicked ? (
        <Box fullWidth>
          <Typography
            variant="button"
            display="block"
            sx={{ margin: "10px 0px", fontWeight: "bolder" }}
          >
            Select your state
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-name-label">Select state</InputLabel>
            <Select
              required
              label="Select State"
              fullWidth
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              single
              value={personName}
              onChange={handle}
            >
              {/* {state.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}

                </MenuItem>
              ))} */}

              {state==1? dropdown.filter((id)=> (id.countryId===2)).map((name)=>(
                    <MenuItem key = {name.territoryName} value={name.territoryName} onClick={()=>handleTerritorySelect(name)}>
                      
                      {name.territoryName}
                    </MenuItem>
                  ))
                

               :dropdown.filter((id)=> (id.countryId===1)).map((name)=>(
                <MenuItem key = {name.territoryName} value={name.territoryName} onClick={()=>handleTerritorySelect(name)}>
                  
                  {name.territoryName}
                </MenuItem>
              )) }
              

            </Select>
          </FormControl>
        </Box>
      ) : null }
      <Button
        onClick={()=>{
          if (isError) {
            return (
              <Typography variant="caption"  sx={{ mt: 1 }}>
                Sold by date is Required
              </Typography>
            );
          }
          if(disabled===true){

            props.nextFormStep();
            props.handleNext();

          }
            // props.setFormStep(2)
        }}
        variant="contained"
        sx={{
          width: "35%",
          margin: "30px 0px 10px 0px",
        }}
      >
        Next
      </Button>
    </Box>
}
    </>
  );
};
export default LocationForm;








