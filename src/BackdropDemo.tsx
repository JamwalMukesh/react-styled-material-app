// src/App.tsx

import React, { useState } from 'react';
import { Backdrop, CircularProgress, Button } from '@mui/material';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';



// Styled Backdrop
const StyledBackdrop = styled(Backdrop)`
  z-index: 1201;
  color: ${({ theme }) => {
        console.log("Theme", theme);
        return theme.palette.primary.main;
    }};
  background-color: rgba(0, 0, 0, 0.85);
`;

// Styled Button
const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(2)}px;
`;

const BackdropDemo = () => {
    const [open, setOpen] = useState(false);
    

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={theme}>
            <div>
                <StyledButton variant="contained" color="primary" onClick={handleToggle}>
                    Show Backdrop
                </StyledButton>
                <StyledBackdrop open={open} onClick={handleToggle}>
                    <CircularProgress color="inherit" />
                </StyledBackdrop>
            </div>
        </ThemeProvider>
    );
};

export default BackdropDemo;
