import { Box, Button, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { SignUp } from "./SignUp";

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log('Login successful', data);
  };

  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: '600px',
            // margin: 'auto',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: 'white',
          }}
        >
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
            Login to your account
          </Typography>
          <Box mt={1}>
            <a href="#" variant="body2">
              Don't have an account? Sign Up
            </a>
          </Box>
          <Button style={{ height: '58px',width:'100%', border: '1px solid #c4c4c4',borderRadius:'5px', marginTop: '2rem' ,display:'flex',gap:'12px'}}>
            <FcGoogle size={30}/>
            <Typography style={{fontWeight: '600',color:'#6a6a6a'}}>Continue with Google</Typography>
          </Button>
          <TextField
            fullWidth
            label="Username"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 3,
                message: 'Username must be at least 3 characters',
              },
            })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            margin="normal"
          />
          <TextField
            fullWidth
            type="password"
            label="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters',
              },
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            margin="normal"
            sx={{ mt: 2 }}
          />
          <FormControlLabel
            control={<Checkbox {...register('rememberMe')} color="primary" />}
            label="Remember Me"
            sx={{ mt: 1, textAlign: 'left' }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <a href="#" variant="body2">
              Forgot Password?
            </a>
            {/* <Box mt={1}>
                <a href="#" variant="body2">
                  Don't have an account? Sign Up
                </a>
              </Box> */}
          </Box>
        </Box>
        <SignUp/>
      </Box>
    </>
  );
};
