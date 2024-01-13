import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
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
          <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            Login to your account
          </Typography>
          <Box style={{ display: "flex", gap: "6px", marginTop: "16px" }}>
            <Typography style={{ color: "#8f8282" }}>
              Don't have an account?
            </Typography>
            <Typography
              style={{
                color: "#6e6161",
                cursor: "pointer",
                fontWeight: "bold",
                textDecoration: "underLine",
              }}
            >
              Sign Up
            </Typography>
          </Box>
          <Button
            style={{
              height: "58px",
              width: "100%",
              border: "1px solid #c4c4c4",
              borderRadius: "5px",
              marginTop: "2rem",
              display: "flex",
              gap: "12px",
            }}
          >
            <FcGoogle size={30} />
            <Typography style={{ fontWeight: "600", color: "#6a6a6a" }}>
              Continue with Google
            </Typography>
          </Button>
          <Divider
            sx={{
              height: "20px",
              textAlign: "center",
              color: "#aba2a2",
              display: "flex",
              alignItems: "center",
              marginTop: "2.5rem",
            }}
          >
            OR
          </Divider>
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
