import { Box, Typography, styled } from "@mui/material";

// (({ colorActive, isActive }) => ({

export const MainContainerBox = styled(Box)({
    paddingTop: '4rem',
    width: '100%'
    // padding: '4rem 5rem',
});

export const ChildContainer = styled(Box)({
    display: 'flex',
    width: '75%',
    margin: 'auto!important',
});

export const ImageBox = styled(Box)({
    width: '50%',
    marginBottom: '0',
    display: 'flex'
});

export const ChildImage = styled(Box)({

});
export const SmallImge = styled(Box)(({ isActive }) => ({
    color: 'transparent',
    width: '100px',
    height: '100px',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    verticalAlign: 'middle',
    marginTop: isActive ? '.5rem' : '0rem'
}));

export const LargeImage = styled(Box)({
    marginLeft: '0.5rem',
    width: '100%'
});

export const LargeImg = styled(Box)({
    color: 'transparent',
    margin: 'auto',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    verticalAlign: 'middle',
    aspectRatio: '1/1',
    width: '100%',
    objectFit: 'cover'
});



export const ImageTextBox = styled(Box)({

});
