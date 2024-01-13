import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const SignUp = () => {
    const [loginData,setLoginData] = useState([])
    console.log("Login successful", loginData);
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      setLoginData(data)
    };

  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: "600px",
            margin: "auto",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
          }}
        >
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold",display:'flex',alignItems:'center',gap:'8px' }}>
          Register 
          <IoIosInformationCircleOutline />
          </Typography>
          <Divider
            sx={{marginTop:'12px'}}
          />
          <Box style={{ marginTop: "17px" }}>
            <TextField
              fullWidth
              label="Username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
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
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
              margin="normal"
              sx={{ mt: 2 }}
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#4338ca",
              color: "#fff",
              fontWeight: "600",
              marginTop: "17px",
              '&:hover':{backgroundColor:'#4338caa1'}
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};
