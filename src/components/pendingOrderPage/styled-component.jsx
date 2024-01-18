import { Box, Typography, styled } from "@mui/material";

export const MainBox = styled(Box)({
    padding: '2.5rem',
    minHeight: '400px',
})




export const SecondCartItem = styled(Box)({
    borderBottom: '1.5px solid gray',
    display: 'flex',
    marginBottom: '0.8rem!important',
});

export const CartImage = styled(Box)({
    width: '8%',
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

export const Text = styled(Typography)(({ isActive, isLeft }) => ({
    fontWeight: isActive ? '' : '600',
    fontSize: isActive ? '.900rem' : '1.25rem',
    lineHeight: isActive ? '1.25rem' : '1.75rem',
    marginBottom: '0.25rem!important',
    color: isActive ? 'rgb(86 90 81)' : '#42463b',
    marginLeft: isLeft ? '5rem' : ''
}));


export const MainDeleteBox = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
});


export const SecondBox = styled(Box)({
    display: 'flex',
    alignItems: "center"
});

export const PendinBoxBtn = styled(Box)({
    fontWeight: '600',
    cursor: 'pointer',
    padding: '0.5rem',
    border: '2px solid #e7bd18',
    borderRadius: '7px',
    color: '#e7bd18',
    "&:hover": {
        color: '#000',
    }

})