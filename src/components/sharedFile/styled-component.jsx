import { Box, Button, styled } from "@mui/material";

export const Basic = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: "center",
  height: '100vh',
  fontSize: '.875rem',
  lineHeight: '3rem',
  padding: "4rem",
  color: 'gray'
})
export const TagHeading = styled(Box)({
  // color:'red',
  // fontSize: '2rem',
  // lineHeight: '3rem',
  backgroundImage:
    "linear-gradient(90deg, #31343a 53%, #5745df 49%)",
  color: "#0000",
  webkitBackgroundClip: "text",
  backgroundClip: "text",
  fontWeight: "bold",
  display: "inlineBlock",
  fontSize: "1.8rem",
});

export const ButtonBox = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textTransform: 'lowercase !important'
});
export const ImageBox = styled(Box)({
  opacity: '.80!important'
});
