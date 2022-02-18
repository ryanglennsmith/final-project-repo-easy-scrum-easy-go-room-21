import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function NavBar() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <div>
          <Typography variant="h6" color="inherit" noWrap>
            LOGO
          </Typography>
        </div>

        <div>
          <Button color="secondary" variant="contained">
            nav-item
          </Button>
          <Button color="secondary" variant="contained">
            nav-item
          </Button>
          <Button color="secondary" variant="contained">
            nav-item
          </Button>
          <Button color="secondary" variant="contained">
            nav-item
          </Button>
          <Button color="secondary" variant="contained">
            nav-item
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
