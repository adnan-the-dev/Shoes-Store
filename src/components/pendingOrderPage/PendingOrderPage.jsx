import React from 'react'
import { CartImage, CartTextBox, MainBox, MainDeleteBox, PendinBoxBtn, SecondBox, SecondCartItem, TagBox, Text } from './styled-component'
import { Box, TextField } from '@mui/material'
import { MdDelete } from "react-icons/md";
import runShoes from '../../assets/runShoes.webp'
import { category } from '../arrayComponent/Array'

export const PendingOrderPage = () => {
    return (
        <>
            <MainBox>
                {
                    category.map((item) => {
                        return (
                            <SecondCartItem>
                                <CartImage component='img' src={runShoes} alt="" />
                                <CartTextBox>
                                    <TagBox>
                                        <Text>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</Text>
                                        <Text isActive={true}>Price : 66.5 Rs</Text>
                                    </TagBox>
                                    <MainDeleteBox>
                                        <Box>
                                            <SecondBox>
                                                <Text isActive={true}>Size: UK 6.5</Text>
                                                <Text style={{ color: 'rgb(86 90 81)', fontWeight: 'normal', fontSize: '1rem' }} isLeft={true}>
                                                    Quantity:0
                                                </Text>
                                            </SecondBox>
                                        </Box>
                                        <Box>
                                            <PendinBoxBtn>Pending</PendinBoxBtn>
                                        </Box>
                                    </MainDeleteBox>
                                </CartTextBox>
                            </SecondCartItem>
                        )
                    })
                }
            </MainBox>
        </>
    )
}
