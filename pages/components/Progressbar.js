import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

export default function ProgressMobileStepper(props) {
  const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

  return (
    <MobileStepper
      variant="progress"
      steps={6}
      position="static"
      activeStep={props.activeStep}
      sx={{ maxWidth: "85%", flexGrow: 1,margin:"20px auto" , "& .MuiLinearProgress-root":{
        width:"100%"
      }}}
    //   nextButton={
    //     <Button size="small" onClick={props.handleNext} disabled={props.activeStep === 5}>
    //       Next
    //       {theme.direction === 'rtl' ? (
    //         <KeyboardArrowLeft />
    //       ) : (
    //         <KeyboardArrowRight />
    //       )}
    //     </Button>
    //   }
    //   backButton={
    //     <Button size="small" onClick={props.handleBack} disabled={props.activeStep === 0}>
    //       {theme.direction === 'rtl' ? (
    //         <KeyboardArrowRight />
    //       ) : (
    //         <KeyboardArrowLeft />
    //       )}
    //       Back
    //     </Button>
    //   }
    />
  );
}