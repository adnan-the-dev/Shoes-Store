import React from 'react'
import banner from '../../assets/banner.webp'
import Adidas from '../../assets/Adidas.webp'
import Nike from '../../assets/Nike.webp'
import Bata from '../../assets/Bata.webp'
import Service from '../../assets/Service.webp'
import { Box, Grid, Typography } from '@mui/material'
import { CarouselBox, CarouselText, CatagoryBox, CategoryTag, ChildCatagoryBox, ImageBox, MainSilderBox, SilderTag, TypographyBox } from './styled-component'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { toast } from 'react-toastify'


export default function Home() {
  const category = [
    {
      img: Adidas,
      name: 'Adidas'
    },
    {
      img: Nike,
      name: 'Nike'
    },
    {
      img: Bata,
      name: 'Bata'
    },
    {
      img: Service,
      name: 'Service'
    },
  ]
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    },
};
return (
  <>
    <Box>
      <img width='100%' src={banner} alt="" />
    </Box>

    <CatagoryBox>
      {
        category.map((item, i) => {
          return (
            <ChildCatagoryBox key={i}>
              <ImageBox component='img' src={item.img} alt="" />
              <CategoryTag>
                <TypographyBox onClick={() => toast.success(item.name)}>{item.name}</TypographyBox>
              </CategoryTag>
            </ChildCatagoryBox>
          )
        })
      }
    </CatagoryBox>

    {/* *********Silder Section************ */}

    <MainSilderBox>
      <SilderTag>By Adidas</SilderTag>
      <CarouselBox>
      <Carousel style={{ textAlign: 'center' }} responsive={responsive}>
        {
          category.map((item) => {
            return (
              <ImageBox component='img' src={item.img} alt="" />
            )
          })
        }
      </Carousel>
      <CarouselText>CLOUDFOAM PURE SHOES</CarouselText>
      </CarouselBox>
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