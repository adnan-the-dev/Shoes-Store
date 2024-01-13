import {TextField, Typography, styled } from "@mui/material";


export const UserTextField = styled(TextField)({
    // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
    // boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
    // boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    boxShadow: 'rgba(0, 0, 0, 0.10) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    borderRadius:'6px',
    marginTop:'1rem'
})
export const InputLable = styled(Typography)({
    fontWeight:'bold',
    color:'#363b42',
    fontSize: '.9rem',
    marginTop:'1.4rem'
})