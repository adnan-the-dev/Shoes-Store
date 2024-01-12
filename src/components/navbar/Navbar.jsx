import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineUser } from "react-icons/ai"
import { IoCartOutline } from "react-icons/io5";

export const Navbar = () => {

  return (
    <>
      <Box style={{
        height: '85px',
        width: '100%',
        // border:'1px solid red',
        backgroundColor: 'aqua',
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        padding:'0px 6rem'
      }}>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img style={{ width: '70px' }} src={logo} alt="" />
          <Typography>Log in</Typography>
          <Typography>Admin panel</Typography>
        </Box>
        <Box style={{ display: 'flex', alignItems: 'center', gap: '9px' ,opacity:'.800', fontSize:'1.4rem'}}>
          <Typography>Log out</Typography>
          <AiOutlineUser />
          <IoCartOutline />
        </Box>
      </Box>
    </>
  )
}
