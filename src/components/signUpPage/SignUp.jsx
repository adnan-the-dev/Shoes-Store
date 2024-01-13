import { Box, Button, Divider, Typography } from "@mui/material";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CiCircleCheck } from "react-icons/ci";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { InputLable, UserTextField } from "./styled-component";

export const SignUp = () => {
  const [loginData, setLoginData] = useState([]);
  console.log(loginData);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoginData(data);
  };

  return (
    <>
      <Box>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            // maxWidth: "600px",
            // margin: "auto",
            padding: "4rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
            "& fieldset": { border: 'none' },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            Register
            <IoIosInformationCircleOutline size={18} />

          </Typography>
          <Divider sx={{ marginTop: "12px" }} />
          <Box style={{ marginTop: "17px", padding:'12px 0px' }}>
            <InputLable>First Name</InputLable>
            <UserTextField
              fullWidth
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
              })}
            />
            <InputLable>password</InputLable>
            <UserTextField
              fullWidth
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              sx={{ mt: 2 }}
            />
            <InputLable>Email</InputLable>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Box style={{ padding: '16.5px 20px',marginTop:'1rem', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                <MdOutlineMail size={19} />
              </Box>
              <UserTextField
                fullWidth
                placeholder="example@gmail.com"
                {...register("email", {
                  required: "Email is required",
                })}
              />
            </Box>
            <InputLable>Street Address</InputLable>
            <UserTextField
              fullWidth
              {...register("address", {
                required: "Address is required",
              })}
            />
            <InputLable>City</InputLable>
            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <UserTextField
                fullWidth
                placeholder="Log Angeles"
                {...register("city", {
                  required: "City is required",
                })}
              />
              <Box style={{ padding: '10px 20px',marginTop:'1rem', borderRadius: '6px', boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px' }}>
                <IoIosArrowUp size={14} />
                <IoIosArrowDown size={14} />
              </Box>
            </Box>
            <InputLable>State/Province</InputLable>
            <UserTextField
              fullWidth
              placeholder="California"
              {...register("stateProvince", {
                required: "StateProvince is required",
              })}
            />
            <InputLable>Country</InputLable>
            <UserTextField
              fullWidth
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
            />
            <InputLable style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              ZIP/Postal Code
              <IoIosInformationCircleOutline size={18} />
            </InputLable>
            <UserTextField
              fullWidth
              placeholder="8675"
              {...register("PostalCode", {
                required: "ZIP/Postal Code is required",
              })}
            />
            <Box style={{ backgroundColor: '#f3f4f6', padding: '2rem 3rem', marginTop: '2rem', borderRadius: '6px' }}>
              <Typography sx={{ paddingLeft: '2rem', fontWeight: 'bold', color: '#363b42', fontSize: '1.1rem' }}>Alerts</Typography>
              <Typography sx={{ padding: '1rem 2rem', color: '#9399a1', fontSize: '.9rem' }}>Get updates of any new activity or features. Turn on/off your preferences</Typography>
            </Box>
            <Box style={{display:'flex',alignItems:'center',justifyContent: 'flex-end',gap:'1rem'}}>
            <CiCircleCheck size={18} strokeWidth= '1' color='#17d781' marginTop='1rem'/>
              <Button
                type="submit"
                sx={{
                  p: 2,
                  backgroundColor: "#e7e7e7",
                  color: "#2f2fff",
                  marginTop: "17px",
                  "&:hover": { backgroundColor: "#4338caa" },
                  fontSize: '.75rem',
                  lineHeight: '1rem',
                  padding:'0.9rem 1.5rem'
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                sx={{
                  p: 2,
                  backgroundColor: "#4338ca",
                  color: "#fff",
                  marginTop: "17px",
                  "&:hover": { backgroundColor: "#4338caa1" },
                  fontSize: '.75rem',
                  lineHeight: '1rem',
                  padding:'0.9rem 2rem'
                }}
              >
                Save
              </Button>
            </Box>
          </Box>
          {/* <Button
            type="submit"
            fullWidth
            sx={{
              p: 2,
              backgroundColor: "#4338ca",
              color: "#fff",
              fontWeight: "600",
              marginTop: "17px",
              "&:hover": { backgroundColor: "#4338caa1" },
            }}
          >
            Login
          </Button> */}
        </Box>
      </Box >
    </>
  );
};
