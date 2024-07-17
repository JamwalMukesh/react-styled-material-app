// src/App.tsx

import React, { useState } from 'react';
import { Snackbar, SnackbarContent, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

// Styled Snackbar Content
const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #333;
  color: #fff;
  font-size: 16px;
  min-width: 300px;
  flex-wrap: nowrap;
  border-radius: 8px;
`;

// Styled Close Button
const StyledIconButton = styled(IconButton)`
  color: #fff;
`;

// Styled Action Button
const StyledActionButton = styled(Button)`
  color: #ffeb3b;
  font-weight: bold;
`;

const SnackbarDemo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Show Snackbar
      </Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
        <StyledSnackbarContent
          message="This is a styled Snackbar!"
          action={
            <>
              <StyledActionButton size="small" onClick={handleClose}>
                UNDO
              </StyledActionButton>
              <StyledIconButton size="small" aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </StyledIconButton>
            </>
          }
        />
      </Snackbar>
    </div>
  );
};

export default SnackbarDemo;
