import { Autocomplete, Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { AiOutlineUser } from "react-icons/ai"
import { RiShoppingBag2Line } from "react-icons/ri";
import { LogoBox, LogutBox, MainBox } from '../sharedFile/styled-component';
import { Link } from 'react-router-dom';
import { getProductData } from '../../api/signApi/signUpApi'
import { NavLink } from 'react-router-dom/dist';
import { category } from '../arrayComponent/Array'



export const Navbar = () => {
  const [prodcuts, setProdcuts] = useState([])

  const getDataApi = async () => {
    const res = await getProductData()
    setProdcuts(res.data.result)
  }
  useEffect(() => {
    getDataApi()
  }, [])


  const arr = prodcuts.map((item) => ({ cat: item.catagory, id: item.images }))
  const unique = [...new Set(arr.map((item) => item.cat))]

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
                unique.map((item, i) => {
                  // const productId = arr?.find((ob) => ob.id == item)
                  return (
                    // <NavLink>
                    <option key={i} value="">{item}</option>
                    // </NavLink>
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
          <NavLink to='/cart' style={{color:'black'}}>
            <RiShoppingBag2Line />
          </NavLink>
        </LogutBox>
      </MainBox >
    </>
  )
}
