// src/App.tsx

import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

// Styled Dialog
const StyledDialog = styled(Dialog)`
  .MuiPaper-root {
    background-color: #333;
    color: #fff;
    border-radius: 8px;
    padding: 16px;
    width: 500px;
  }
`;

// Styled Dialog Title
const StyledDialogTitle = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

// Styled Dialog Content
const StyledDialogContent = styled(DialogContent)`
  margin-top: 16px;
`;

// Styled Dialog Actions
const StyledDialogActions = styled(DialogActions)`
  display: flex;
  justify-content: space-between;
  padding: 8px 24px;
`;

// Styled IconButton
const StyledIconButton = styled(IconButton)`
  color: #fff;
`;

const DialogDemo = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogTitle>
          Custom Dialog
          <StyledIconButton edge="end" onClick={handleClose}>
            <CloseIcon />
          </StyledIconButton>
        </StyledDialogTitle>
        <StyledDialogContent>
          <DialogContentText style={{ color: '#fff' }}>
            Please fill out the form below:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
            }}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            InputLabelProps={{
              style: { color: '#fff' },
            }}
            InputProps={{
              style: { color: '#fff', borderColor: '#fff' },
            }}
          />
        </StyledDialogContent>
        <StyledDialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit
          </Button>
        </StyledDialogActions>
      </StyledDialog>
    </div>
  );
};

export default DialogDemo;
