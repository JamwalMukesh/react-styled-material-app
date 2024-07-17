import './App.css';
import { Button, Modal, Typography } from '@mui/material';
import StyledButton from './StyledButton';
import { useState } from 'react';
import StyledModalBox from './StyledModalBox';
import SnackbarDemo from './SnackbarDemo';
import DialogDemo from './DialogDemo';
import BackdropDemo from './BackdropDemo';

function App() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <header className="App-header">
        <Button variant="contained" color="primary">
          Hello Material-UI
        </Button>
        <StyledButton variant="contained">
          Hello Styled-Components
        </StyledButton>
        <div>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Open Modal
          </Button>
          <Modal open={open} onClose={handleClose}>
            <StyledModalBox>
              <Typography variant="h6" component="h2">
                Styled Modal
              </Typography>
              <Typography sx={{ mt: 2 }}>
                This is a modal styled with styled-components.
              </Typography>
              <Button variant="contained" color="secondary" onClick={handleClose} sx={{ mt: 2 }}>
                Close
              </Button>
            </StyledModalBox>
          </Modal>
        </div>
        <SnackbarDemo />
        <DialogDemo/>
        <BackdropDemo/>
      </header>

    </div>
  );
}

export default App;
