import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Basic } from "../sharedFile/styled-component";

export default function Main() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <Basic>
            <h1>Feat wear Paradies</h1>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </Typography>
            <Button variant="contained"> LogIn</Button>
            <Button variant="contained" color="success"> Admin Panel</Button>
          </Basic>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Box>
            <img
              src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
