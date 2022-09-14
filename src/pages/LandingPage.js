import { Box, Grid, Modal, Button, Typography, TextField } from '@mui/material'
import React from 'react'
import desktopImage from '../assets/img/desktop-image.png'
import desktopLogo from '../assets/img/desktop-logo.png'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const LandingPage = () => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(true);
  return (
    <>
      <Grid container sx={{ marginLeft: { lg: "140px", xs: "0px" }, marginTop: { lg: "90px", xs: "0px" } }}>
        <Grid item xs={6}>
          <img src={desktopImage} alt="Background Image" />
        </Grid>
        <Grid item xs={6}>
          <img src={desktopLogo} alt="Logo for Coffee & CO" />
        </Grid>

      </Grid>

      <Box>
        <Button onClick={handleOpen}>Open modal</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{backgroundColor: "rgba(0,0,0,0) !important"}}
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h4" component="h2">
              Join us for <span style={{ color: "#CC905D" }}>coffee</span>  or <span style={{ color: "#9A5580" }}>late night cocktails</span>
            </Typography>
            <Typography id="modal-modal-description" variant='h5' sx={{ mt: 2 }}>
              Please verify you are 18 year or older
            </Typography>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Day"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
            ></TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Month"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
            ></TextField>
            <TextField
              id="outlined-select-currency-native"
              select
              label="Year"
              SelectProps={{
                native: true,
              }}
              helperText="Please select your currency"
            ></TextField>
            <Box>

              <Button variant='contained'>Enter Site</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}

    </>
  )
}

export default LandingPage