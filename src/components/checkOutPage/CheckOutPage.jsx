import React from 'react'
import {
    CartHeadingBox,
    CartImage,
    CartItem,
    CartTextBox,
    CheckoutBtn,
    ChildCartitem,
    Heading,
    MainCartItemBox,
    MainDeleteBox,
    MainShoppingCartBox,
    MainSummaryBox,
    SecondBox,
    SecondCartItem,
    SubTotalBox,
    SummaryChildBox,
    SummaryDescription,
    TagBox,
    Text
} from './styled-component'
import runShoes from '../../assets/runShoes.webp'
import { Box, Button, TextField, Typography } from '@mui/material'
// import { RiDeleteBinLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";

import { category } from '../arrayComponent/Array'

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
                                            <Text style={{ color: '#939590', fontWeight: 'normal', fontSize: 'smaller' }} isLeft={true}>
                                                Quantity:
                                                <TextField type='number'
                                                    InputProps={{
                                                        style: {
                                                            width: '5rem',
                                                            height: '1.5rem',
                                                            color: 'inherit',
                                                            fontSize: '100%',
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
                    <MainSummaryBox>
                        <Typography style={{ fontWeight: '600' }}>Summary</Typography>
                        <SummaryChildBox>
                            <SubTotalBox>
                                <Typography>SUBTOTAL</Typography>
                                <Typography>Rs 72.00</Typography>
                            </SubTotalBox>
                            <SummaryDescription>
                                The SubTotal reflects the total price of Your order. Included dues and taxes. before any application discounts. It does not include delivery cost and international transection fee
                            </SummaryDescription>
                        </SummaryChildBox>
                        <Box>
                            <CheckoutBtn>Checkout</CheckoutBtn>
                        </Box>
                    </MainSummaryBox>
                </MainCartItemBox>
            </MainShoppingCartBox>
        </>
    )
}
