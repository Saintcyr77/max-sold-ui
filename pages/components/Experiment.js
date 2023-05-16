import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import { Context } from '..';
import { useContext, useState, useEffect } from 'react';
import TryCatchError from './TryCatchError';
import { useForm, Controller } from 'react-hook-form';
import registrationSlice,{reduxwalanaam} from '../Store/Slices/UserSlice';
import { useDispatch } from 'react-redux';
function Experiment(props) {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  function handleDropdown(down) {
    console.log(down.reasonId);
    setValue('sd', down.reasonId);
    value.setRegistrationApi({
      reasonToSell: down.reasonId,
    });
  }

  const [currencies, setCurrencies] = useState([]);
  const value = useContext(Context);
  const {
    handleSubmit,
    formState: { errors },
    control, 
    setValue,
  } = useForm({ mode: 'onBlur' });

  useEffect(() => {
    async function fetchCurrencies() {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      try {
        const res = await axios.get('https://seller-dev.api.maxsold.com/selling-reasons?', config);
        setCurrencies(res.data);
      } catch (error) {
        console.log('error with api');
        setError(true);
      }
    }

    fetchCurrencies();
  }, []);

  const handleFormSubmit = (data) => {
    if (!disabled) {
      props.nextFormStep();
    }

    value.setRegistrationApi({
      firstName: data.fname,
      lastName: data.lastname,
      email: data.email,
      phoneNumber: data.phone,
      reasonToSell: data.sd,
    });
    dispatch(reduxwalanaam({
      firstName: data.fname,
      lastName: data.lastname,
      email: data.email,
      phoneNumber: data.phone,
      reasonToSell: data.sd
    }));
  };
  console.log(dispatch);

  const StyledLink = styled('a')({
    color: 'blue',
    '&:hover': {
      color: 'red',
    },
  });

  const [disabled, setDisabled] = React.useState(false);

  return (
    <>
      {error === true ? (
        <TryCatchError />
      ) : (
        <form noValidate onSubmit={handleSubmit(handleFormSubmit)}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              width: '100%',
              bgcolor: '#FFFFFF',
              gap: 3,
              marginTop: '20px',
              marginBlock: '42px',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', gap: 2 }}>
              <Controller
                name="fname"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Name is required',
                  minLength: { value: 2, message: 'Name should be of minimum 2 characters length' },
                }}
                render={({ field }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="outlined-required"
                    label="First Name"
                    error={Boolean(errors.fname)}
                    helperText={errors.fname?.message || 'Please enter your First Name'}
                    {...field}
                  />
                )}
              />
                            <Controller
                name="lastname"
                control={control}
                defaultValue=""
                rules={{ required: 'Last Name is required' }}
                render={({ field }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="outlined-required"
                    label="Last Name"
                    error={Boolean(errors.lastname)}
                    helperText={errors.lastname?.message || 'Please enter your Last Name'}
                    {...field}
                  />
                )}
              />

              <Controller
                name="phone"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Phone Number is required',
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Phone Number should contain only numbers',
                  },
                  maxLength: {
                    value: 10,
                    message: 'Phone Number should be of 10 characters length',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="outlined-required"
                    label="Phone Number"
                    error={Boolean(errors.phone)}
                    helperText={errors.phone?.message || 'Please enter your Phone Number'}
                    {...field}
                  />
                )}
              />

              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                  validate: async (value) => {
                    const res = await axios.post('https://seller-dev.api.maxsold.com/check-email', { email: value });
                    console.log(res);
                    return res.data.data ? 'Email is already registered' : true;
                  },
                }}
                render={({ field }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    required
                    id="email"
                    label="Email Address"
                    error={Boolean(errors.email)}
                    helperText={errors.email?.message || 'Please enter your email'}
                    {...field}
                  />
                )}
              />

              <Typography variant="body1" component="body1" sx={{ alignSelf: 'flex-start' }}>
                I'm looking to SELL my items to...
              </Typography>

              <Controller
                name="sd"
                control={control}
                defaultValue=""
                rules={{ required: 'Please select an option' }}
                render={({ field }) => (
                  <TextField
                    sx={{ width: '100%' }}
                    id="sd"
                    select
                    label="Select an option"
                    defaultValue="EUR"
                    error={Boolean(errors.sd)}
                    helperText={errors.sd?.message || ''}
                    onChange={() => setDisabled(true)}
                    {...field}
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.reasonId} value={option.reasonId} onClick={() => handleDropdown(option)}>
                        {option.reason}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />

              <Button variant="contained" type="submit" sx={{ alignSelf: 'flex-start' }}>
                Next
              </Button>

              <Typography variant="body1" sx={{ alignSelf: 'flex-start' }}S>
                By clicking next you agree to MaxSold's{' '}
                <StyledLink href="#">Terms and Conditions</StyledLink> and{' '}
                <StyledLink href="#">Privacy Notice</StyledLink>
              </Typography>
            </Box>
          </Box>
        </form>
      )}
    </>
  );
}

export default Experiment;

