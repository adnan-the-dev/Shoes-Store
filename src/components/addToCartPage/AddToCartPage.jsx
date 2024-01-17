import React from 'react'
import { ChildContainer, ChildImage, ImageBox, ImageTextBox, LargeImage, LargeImg, MainContainerBox, SmallImge } from './styled-component'
import Adidas from '../../assets/Adidas.webp'
import racer from '../../assets/racer.webp'
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
                        hello
                    </ImageTextBox>
                </ChildContainer>
            </MainContainerBox>
        </>
    )
}


{/* <img style={{ width: '500px', height: '500px' }}
                    src="https://shoe-paradies.vercel.app/_next/image?url=%2Fwal.avif&w=1920&q=75"
                    alt=""
                /> */}