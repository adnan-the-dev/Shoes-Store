import React from 'react'
import { ChildContainer, ChildImage, ImageBox, ImageTextBox, LargeImage, LargeImg, MainContainerBox, Price, PriceBox, PriceSection, SmallImge, TypographyBox } from './styled-component'
import Adidas from '../../assets/Adidas.webp'
import racer from '../../assets/racer.webp'
import { Typography } from '@mui/material'
export function AddToCartPage() {
    return (
        <>
            <MainContainerBox>
                <ChildContainer>
                    <ImageBox>
                        <ChildImage>
                            <SmallImge component='img' src={Adidas} alt="" />
                            <SmallImge isActive={true} component='img' src={Adidas} alt="" />
                            <SmallImge isActive={true} component='img' src={Adidas} alt="" />
                        </ChildImage>
                        <LargeImage>
                            <LargeImg component='img' src={racer} alt="" />
                        </LargeImage>
                    </ImageBox>

                    <ImageTextBox>
                        <TypographyBox>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</TypographyBox>
                        <TypographyBox isActive={true}>Grey Two / Collegiate Green / Cloud White</TypographyBox>

                        <PriceSection>
                            <PriceBox>
                                <Price>Price: $ 70</Price>
                                <Price isActive={true}>Price: $ 58</Price>
                            </PriceBox>
                                <Price isLine={true}>incl of taxes</Price>
                        </PriceSection>
                    </ImageTextBox>
                </ChildContainer>
            </MainContainerBox>
        </>
    )
}
