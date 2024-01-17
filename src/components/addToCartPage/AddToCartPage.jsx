import React from 'react'
import {
    ButtonAddCart,
    ChildContainer,
    ChildGridBox,
    ChildImage,
    DescriptionHeading,
    ImageBox,
    ImageTextBox,
    LargeImage,
    LargeImg,
    MainContainerBox,
    Price,
    PriceBox,
    PriceSection,
    ProductDescription,
    SizeBox,
    SizeGridBox,
    SizeTage,
    SmallImge,
    TypographyBox
} from './styled-component'
import Adidas from '../../assets/Adidas.webp'
import racer from '../../assets/racer.webp'
import { size } from '../arrayComponent/Array'
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
                            <Price isLine={true}>(also incl all duty charges)</Price>

                            <SizeBox>
                                <SizeTage>Select Size</SizeTage>
                                <SizeGridBox>
                                    {
                                        size.map((item) => {
                                            return (
                                                <ChildGridBox>{item}</ChildGridBox>
                                            )
                                        })
                                    }
                                </SizeGridBox>
                            </SizeBox>
                            <ButtonAddCart component='button'>Add to Cart</ButtonAddCart>
                            <ButtonAddCart active={true} component='button'>Online payment</ButtonAddCart>

                            <ProductDescription>
                                <DescriptionHeading>product details</DescriptionHeading>
                                <DescriptionHeading activeWidth={true}>very comfertable and soft shoes easy to wear  and good for walk</DescriptionHeading>
                            </ProductDescription>
                        </PriceSection>
                    </ImageTextBox>
                </ChildContainer>
            </MainContainerBox>
        </>
    )
}
