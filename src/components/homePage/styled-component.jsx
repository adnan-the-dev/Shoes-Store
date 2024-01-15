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
  // textAlign: 'center',
  // display: "block",
  // justifyContent: "center",
  // alignItems:'center'

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


