import { Box, Typography, styled } from "@mui/material";

export const CatagoryBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

export const ChildCatagoryBox = styled(Box)({
  backgroundColor: "#edeef0",
  // width:'25%'
});

export const ImageBox = styled(Box)({
  height: "300px",
  width: "300px",
  // padding: "2px 2px",
});

export const CategoryTag = styled(Box)({
  display: "flex",
  justifyContent: "center",
});

export const TypographyBox = styled(Typography)({
  fontWeight: "600",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#000",
    color: "#fff",
  },
});
// *********Silder Section************

export const MainSilderBox = styled(Box)({
  marginTop: '3rem!important',
});

export const SilderTag = styled(Box)({
  marginLeft: "2.5rem",
  fontWeight: "bold",
  fontWeight: "600",
  fontSize: "1.25rem",
  lineHeight: "1.75rem",
  marginBottom: '3rem!important',
});

export const CarouselBox = styled(Box)({
  textAlign: 'center',
  // display: "block",
  // justifyContent: "center",
  // alignItems:'center'

});
export const CarouselImage = styled(Box)({
  // height: "300px",
  width: "400px",
  // padding: "2px 2px",
});
export const CarouselBoxText = styled(Box)({
  // display:'flex',
  // justifyContent:'flex-start',
  padding: '0px 1.9rem',
  textAlign: 'left'
});
export const CarouselTypography = styled(Typography)({
  fontWeight: 'bold'
});

export const CarouselText = styled(Typography)({
  fontWeight: '600',
  marginLeft: '0.5rem',
  marginBottom: '0!important',
  marginTop: '0.5rem!important',
  cursor: 'pointer',
  listStyle: 'none',
  fontStyle: 'normal',
});

export const DiscoutBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between'
});

export const DiscoutText = styled(Typography)({
  color: '#1eb957'
});

// *********Card Section************

export const MainCardSection = styled(Box)({
  boxSizing: 'border-box',
  marginTop: '3rem!important',
  marginLeft: "3rem",
  marginBottom: '3rem!important',


});

export const NewProductSection = styled(Box)(({active})=>({
  display:'flex',
  justifyContent:'space-between',
  boxSizing: 'border-box',
  "&:hover":{
    backgroundColor:active ? '#000' : ""
  }
}));

export const BoxText = styled(Box)({
  display: 'flex',
  fontWeight: '600',
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
});

export const TypographyText = styled(Typography)(({setActive})=>({
  fontWeight: '600',
  fontSize: setActive ? '1.875rem' : '1.25rem',
  lineHeight:setActive ? '2.25rem' :'1.75rem',
  marginLeft: '2.5rem', 
  color:setActive ? '#d4dbdd':'#000'

}));
export const ViewAllBox = styled(Typography)({
  fontWeight: '600',
  fontWeight:'600',
  cursor:'pointer',
  marginRight:'2.5rem'
});