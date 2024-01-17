import React from 'react'
import { CartHeadingBox, CartImage, CartItem, CartTextBox, ChildCartitem, Heading, InputBox, MainCartItemBox, MainDeleteBox, MainShoppingCartBox, SecondBox, SecondCartItem, TagBox, Text } from './styled-component'
import runShoes from '../../assets/runShoes.webp'
import { Box, TextField } from '@mui/material'
// import { RiDeleteBinLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";


export const CheckOutPage = () => {
    return (
        <>
            <MainShoppingCartBox>
                <CartHeadingBox>
                    <Heading>Shopping Cart</Heading>
                </CartHeadingBox>


                <MainCartItemBox>
                    <ChildCartitem>
                        <CartItem>Cart Items</CartItem>
                        <SecondCartItem>
                            <CartImage component='img' src={runShoes} alt="" />

                            <CartTextBox>
                                <TagBox>
                                    <Text>HOOPS 3.0 LOW CLASSIC VINTAGE SHOES</Text>
                                    <Text isActive={true}>Price : 66.5 Rs</Text>
                                </TagBox>

                                <MainDeleteBox>
                                    <Box>
                                        <Text isActive={true}>Grey Two / Collegiate Green / Cloud White</Text>
                                        <SecondBox>
                                            <Text isActive={true}>Size: UK 6.5</Text>
                                            <Text style={{ color: '#939590', fontWeight: '0px' }} isLeft={true}>
                                                Quantity:
                                                <TextField type='number'
                                                 InputProps={{
                                                    style: {
                                                        width: '5rem',
                                                        height: '2rem',
                                                        color: 'inherit',
                                                        fontSize: '100%',
                                                        // padding:'0px 0px'
                                                    }
                                                }}
                                                />
                                            </Text>

                                        </SecondBox>
                                    </Box>
                                    <Box>
                                        <MdDelete size={25} style={{ marginTop: '1rem', cursor: 'pointer' }} />
                                    </Box>
                                </MainDeleteBox>
                            </CartTextBox>
                        </SecondCartItem>
                    </ChildCartitem>
                    dsfsdf
                </MainCartItemBox>
            </MainShoppingCartBox>
        </>
    )
}
