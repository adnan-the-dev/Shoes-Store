import React from 'react'
import banner from '../../assets/banner.webp'
import Adidas from '../../assets/Adidas.webp'
import Nike from '../../assets/Nike.webp'
import Bata from '../../assets/Bata.webp'
import Service from '../../assets/Service.webp'
import { Box, Typography } from '@mui/material'
import { CatagoryBox, CategoryTag, ChildCatagoryBox, ImageBox, TypographyBox } from './styled-component'


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
    </>
  )
}


