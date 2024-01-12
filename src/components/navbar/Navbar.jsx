import { Autocomplete, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineUser } from "react-icons/ai"
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from '../sharedFile/styled-component';


export const Navbar = () => {
  const brandName = ['Addidas', 'Nike', 'Service', 'Bata']
  return (
    <>
      <MainBox>
        <LogoBox>
          <img style={{ width: '70px' }} src={logo} alt="" />
          <Typography>Complete Order</Typography>
          <Typography>Pending Order</Typography>
          <Box>
            <select style={{ padding: '8px', outline: 'none', fontSize: '1rem', border: 'none', backgroundColor: 'transparent' }}>
              <option label='Select brand'></option>
              {
                brandName.map((item, i) => {
                  return (
                    <option key={i} value="">{item}</option>
                  )
                })
              }
            </select>
          </Box>

          <Typography>Log in</Typography>
          <Typography>Admin panel</Typography>
        </LogoBox>
        <LogutBox>
          <Typography>Log out</Typography>
          <AiOutlineUser />
          <RiShoppingBag2Line />
        </LogutBox>
      </MainBox >
    </>
  )
}
