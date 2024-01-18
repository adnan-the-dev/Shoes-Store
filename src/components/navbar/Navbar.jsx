import { Autocomplete, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineUser } from "react-icons/ai"
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from '../sharedFile/styled-component';
import { Link } from 'react-router-dom';


export const Navbar = () => {
  const brandName = ['Addidas', 'Nike', 'Service', 'Bata']
  return (
    <>
      <MainBox >
        <LogoBox>
          <Link to='/home'>
          <img style={{ width: '70px' }} src={logo} alt="" />
          </Link>
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
          <Link to='/login'>
            <Typography style={{ fontWeight: '600', color: '#191919' }}>
              Log in
            </Typography>
          </Link>
          <Link to='/adminLog'>
            <Typography style={{ fontWeight: '600', color: '#191919' }}>
              Admin panel
            </Typography>
          </Link>
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
