import { Box } from '@mui/material'
import React, { useState } from 'react'
import logo from '../../assets/logo.png'
export const Navbar = () => {

  return (
    <>
      <Box style={{
        height:'85px',
        width:'100%',
        // border:'1px solid red',
        backgroundColor:'aqua'
      }}>
        <Box>
          <img style={{width:'100px'}} src={logo} alt="" />
        </Box>
      </Box>
    </>
  )
}
