import { Box, Typography, styled } from "@mui/material";

export const CatagoryBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const ChildCatagoryBox = styled(Box)({
    backgroundColor: '#edeef0'
});

export const ImageBox = styled(Box)({
    height:'350px',
    width:'370px',
    padding:'2px 2px'
});

export const CategoryTag = styled(Box)({
    display:'flex',
    justifyContent:'center',
    // alignContent:'center',
    // textAlign:'center',
    
});

export const TypographyBox = styled(Typography)({
    fontWeight: '600',
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
    cursor:'pointer',
    "&:hover": {
        backgroundColor: '#000',
        color:'#fff',
      }
});