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
    marginLeft: '4rem'
});

export const TypographyBox = styled(Typography)(({ isActive }) => ({
    fontWeight: '600',
    fontSize: isActive ? 'medium' : '1.875rem',
    lineHeight: '2.25rem',
    color: '#212529'
}));


export const PriceSection = styled(Box)({

});

export const PriceBox = styled(Box)({
    display: 'flex'
});

export const Price = styled(Typography)(({ isActive, isLine }) => ({
    fontWeight: '600',
    marginBottom: '0!important',
    color: isActive ? '#f54e6e' : isLine ? '#dae1eb' : '#9fa5a4',
    marginLeft: isActive ? '0.5rem' : '0rem',
    textDecoration: isActive ? '' : isLine ? '' : 'line-through',
}));

export const SizeBox = styled(Box)({
    marginTop: '4rem',
});

export const SizeTage = styled(Typography)({
    fontWeight: '600',

});

export const SizeGridBox = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
    gap: '0.5rem!important',
});

export const ChildGridBox = styled(Typography)({
    fontWeight: '600',
    border: "1px solid gray",
    opacity: '1',
    cursor: 'pointer',
    width: '6rem',
    height: '2rem',
    borderRadius: '0.375rem',
    textAlign: 'center!important',
    borderWidth: '2px!important',
});