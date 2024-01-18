import React from 'react'
import banner from '../../assets/banner.webp'
import Adidas from '../../assets/Adidas.webp'
import Nike from '../../assets/Nike.webp'
import Bata from '../../assets/Bata.webp'
import Service from '../../assets/Service.webp'
import { Box, Grid, Typography } from '@mui/material'
import { BoxText, CardBox, CardImage, CardText, CardTitle, CardsContainer, CarouselBox, CarouselBoxText, CarouselImage, CarouselText, CarouselTypography, CatagoryBox, CategoryTag, ChildCatagoryBox, DecriptionSection, DiscoutBox, DiscoutText, DiscoutTypo, ImageBox, MainCardSection, MainSilderBox, NewProductSection, Price, PriceSection, SilderTag, TypographyBox, TypographyText, ViewAllBox } from './styled-component'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


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
    {
      img: Service,
      name: 'Service'
    }, {
      img: Service,
      name: 'Service'
    }, {
      img: Service,
      name: 'Service'
    }, {
      img: Service,
      name: 'Service'
    }, {
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
          category.slice(0, 4).map((item, i) => {
            return (
              <ChildCatagoryBox key={i}>
                <ImageBox component='img' src={item.img} alt="" />
                <CategoryTag>
                  <Link to='/allIdName'>
                    <TypographyBox sx={{color:'#000'}} onClick={() => toast.success(item.name)}>{item.name}</TypographyBox>
                  </Link>
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
                  <Box>
                    <Link to='/allIdName'>
                      <CarouselImage component='img' src={item.img} alt="" />
                    </Link>
                    <CarouselBoxText>
                      <CarouselTypography>CLOUDFOAM PURE SHOES</CarouselTypography>
                      <DiscoutBox>
                        <DiscoutText isActive={true}>Rs:75</DiscoutText>
                        <DiscoutText>15% off</DiscoutText>
                      </DiscoutBox>
                    </CarouselBoxText>
                  </Box>
                )
              })
            }
          </Carousel>
        </CarouselBox>
      </MainSilderBox>

      <MainCardSection>
        <NewProductSection>
          <BoxText>
            <TypographyText>--Product</TypographyText>
            <TypographyText setActive={true}>Check our new product</TypographyText>
          </BoxText>
          <ViewAllBox>VIEW ALL</ViewAllBox>
        </NewProductSection>

        <Grid container>
          {
            category.map((item) => <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <CardsContainer>
                <Box style={{ boxShadow: ' rgba(0, 0, 0, 0.15) 0px 3px 3px 0px' }}>
                  <Link to='/allIdName'>
                    <CardImage component='img' src={item.img} alt="" />
                  </Link>
                  <DecriptionSection>
                    <Box>
                      <CardTitle>CLOUDFOAM PURE SHOES</CardTitle>
                    </Box>
                    <CardText>Cloud White / Chalk White / Zero Metalic</CardText>
                    <CardBox>
                      <PriceSection>
                        <Price setColor={true}>12$</Price>
                        <Price>71.25$</Price>
                      </PriceSection>
                      <DiscoutTypo>5%</DiscoutTypo>
                    </CardBox>
                  </DecriptionSection>
                </Box>
              </CardsContainer>
            </Grid>
            )
          }



        </Grid>

      </MainCardSection>
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