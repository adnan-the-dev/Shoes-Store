import {
  Box,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { DividerBox, DontTag, GoogleBtnBox, GoogoleTag, HeadingBox, InputBox, InputLabelBox, LoginBtn, MainBoxLogin, SignUpHereTag, SignUpLineBox } from "./styled-component";

export const Login = () => {
  const [loginData, setLoginData] = useState([])
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
      <MainBoxLogin>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <HeadingBox>
            Login to your account
          </HeadingBox>
          <SignUpLineBox>
            <DontTag>
              Don't have an account?
            </DontTag>
            <Link to='/register'>
              <SignUpHereTag>
                Sign up here
              </SignUpHereTag>
            </Link>
          </SignUpLineBox>
          <GoogleBtnBox>
            <FcGoogle size={30} />
            <GoogoleTag>
              Continue with Google
            </GoogoleTag>
          </GoogleBtnBox>
          <DividerBox>
            OR
          </DividerBox>
          <InputBox>
            <InputLabelBox>Password</InputLabelBox>
            <TextField
              fullWidth
              type="text"
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
            <InputLabelBox>Password</InputLabelBox>
            <TextField
              fullWidth
              type="password"
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
          </InputBox>
          <LoginBtn
            type="submit"
          >
            Login
          </LoginBtn>
        </Box>
      </MainBoxLogin>
    </>
  );
};
