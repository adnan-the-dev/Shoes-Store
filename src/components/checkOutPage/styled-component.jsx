import { Box, TextField, Typography, styled } from "@mui/material";

// (({isActive})=>({
export const MainShoppingCartBox = styled(Box)({
    marginBottom: '5rem',

});

export const CartHeadingBox = styled(Box)({
    width: '100%',
    marginTop: '3rem',
    textAlign: 'center',
});

export const Heading = styled(Typography)({
    fontWeight: '600',
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
    textAlign: 'center',
    color: '#202428'
});

export const MainCartItemBox = styled(Box)({
    paddingRight: '10rem',
    paddingLeft: '10rem',
    display: 'flex',
    width: '100%',
});



export const ChildCartitem = styled(Box)({
    width: '66%',
    marginBottom: '0',
});

export const CartItem = styled(Typography)({
    fontWeight: '600',
    color: '#202428',

});


export const SecondCartItem = styled(Box)({
    // border:'1px solid'
    display: 'flex',
    borderBottomWidth: '2px',
    marginBottom: '0.25rem!important',
});

export const CartImage = styled(Box)({
    width: '13%',
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    verticalAlign: 'middle',
});

export const CartTextBox = styled(Box)({
    width: '100%',
    marginLeft: '0.5rem',
    marginTop: '0.5rem!important',
});


export const TagBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

})

export const Text = styled(Typography)(({ isActive,isLeft }) => ({
    fontWeight: isActive ? '' : '600',
    fontSize: isActive ? '.900rem' : '1.25rem',
    lineHeight: isActive ? '1.25rem' : '1.75rem',
    marginBottom: '0.25rem!important',
    color: isActive ? '#939590' : '',
    // color: isLeft ? '#939590' : '',
    marginLeft:isLeft ? '5rem' : ''
}));

// margin-left: 5rem;

export const MainDeleteBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
});


export const SecondBox = styled(Box)({
    display: 'flex',
});
