import React from 'react'
import banner from '../../assets/banner.webp'
import Adidas from '../../assets/Adidas.webp'
import Nike from '../../assets/Nike.webp'
import Bata from '../../assets/Bata.webp'
import Service from '../../assets/Service.webp'
import { Box, Grid } from '@mui/material'
import { CatagoryBox, CategoryTag, ChildCatagoryBox, ImageBox, MainSilderBox, SilderTag, TypographyBox } from './styled-component'


export default function Home() {
  return (
    <>
    <Box>
        <img width='100%' src={banner} alt="" />
    </Box>

    <CatagoryBox>
        <ChildCatagoryBox>
            <ImageBox component='img' src={Adidas} alt="" />
            <CategoryTag>
                <TypographyBox>Adidas</TypographyBox>
            </CategoryTag>
        </ChildCatagoryBox>
        <ChildCatagoryBox>
            <ImageBox component='img' src={Nike} alt="" />
            <CategoryTag>
                <TypographyBox>Nike</TypographyBox>
            </CategoryTag>
        </ChildCatagoryBox>
        <ChildCatagoryBox>
            <ImageBox component='img' src={Bata} alt="" />
            <CategoryTag>
                <TypographyBox>Bata</TypographyBox>
            </CategoryTag>
        </ChildCatagoryBox>
        <ChildCatagoryBox>
            <ImageBox component='img' src={Service} alt="" />
            <CategoryTag>
                <TypographyBox>Service</TypographyBox>
            </CategoryTag>
        </ChildCatagoryBox>
    </CatagoryBox>

     {/* *********Silder Section************ */}

    <MainSilderBox>
        <SilderTag>By Adidas</SilderTag>
        <Grid container>
            <Grid>

            </Grid>
        </Grid>
    </MainSilderBox>
    </>
  )
}


{/* <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
          <Basic>
            <TagHeading>Feat wear Paradies</TagHeading>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Blanditiis commodi cum cupiditate ducimus, fugit harum id
              necessitatibus odio quam quasi, quibusdam rem tempora voluptates.
              Cumque debitis dignissimos id quam vel!
            </Typography>
            <ButtonBox>
              <Button variant="contained" color="success" onClick={() => {loginRoute()}}> Log in</Button>
              <Button variant="outlined" color="primary" onClick={() => {adminPanel()}}> Admin panel</Button>
            </ButtonBox>
          </Basic>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <ImageBox>
            <img
              src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75"
              alt=""
            />
          </ImageBox>
        </Grid>
      </Grid> */}