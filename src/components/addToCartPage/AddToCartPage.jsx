import React, { useEffect, useState } from 'react'
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
import { getSingleProductApi } from '../../api/signApi/signUpApi'
import { useParams } from 'react-router-dom/dist'
export function AddToCartPage() {

    const [singleProduct, setSingleProduct] = useState({})
    const [loading, setLoading] = useState(true)
    console.log(singleProduct);
    const param = useParams()
    const getDataApi = async () => {
        const res = await getSingleProductApi(param.id)

        if (res.status == 200) { setLoading(false); setSingleProduct(res.data) }

    }
    useEffect(() => {
        getDataApi()
    }, [])


    console.log(loading, 'loading');

    return (
        <>
            <MainContainerBox>
                <ChildContainer>
                    <ImageBox>
                        <ChildImage>
                            {!loading &&
                                <>
                                    <SmallImge component='img' src={singleProduct?.images[0]?.img1} alt="" />
                                    <SmallImge isActive={true} component='img' src={singleProduct?.images[0].img2} alt="" />
                                    <SmallImge isActive={true} component='img' src={singleProduct?.images[0].img3} alt="" />
                                </>

                            }

                        </ChildImage>
                        {!loading &&

                            <LargeImage>
                                <LargeImg component='img' src={singleProduct?.images[0]?.img1} alt="" />
                            </LargeImage>
                        }
                    </ImageBox>

                    <ImageTextBox>
                        {
                            <>
                                <TypographyBox>{singleProduct?.productname}</TypographyBox>
                                <TypographyBox isActive={true}>{singleProduct?.mindetail}</TypographyBox>
                            </>
                        }

                        <PriceSection>
                            <PriceBox>
                                <Price>Price: $ 70</Price>
                                <Price isActive={true}>Price: $ {singleProduct?.price}</Price>
                            </PriceBox>
                            <Price isLine={true}>incl of taxes</Price>
                            <Price isLine={true}>(also incl all duty charges)</Price>

                            <SizeBox>
                                <SizeTage>Select Size</SizeTage>
                                <SizeGridBox>
                                    {
                                        singleProduct?.sizes?.map((item, i) => {
                                            return (
                                                <ChildGridBox key={i}>{item}</ChildGridBox>
                                            )
                                        })
                                    }
                                </SizeGridBox>
                            </SizeBox>
                            <ButtonAddCart component='button'>Add to Cart</ButtonAddCart>
                            <ButtonAddCart active={true} component='button'>Online payment</ButtonAddCart>

                            <ProductDescription>
                                <DescriptionHeading>product details</DescriptionHeading>
                                {
                                    <DescriptionHeading activeWidth={true}>{singleProduct?.fulldetail}</DescriptionHeading>
                                }
                            </ProductDescription>
                        </PriceSection>
                    </ImageTextBox>
                </ChildContainer>
            </MainContainerBox>
        </>
    )
}
