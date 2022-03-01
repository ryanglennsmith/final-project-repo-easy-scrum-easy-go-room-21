import { Box, Link, Typography } from '@mui/material';

// Footer CSS
import {
  footerContainerBox,
  footerBox,
  footerTypography,
} from '../../globalCss.js';

function Copyright() {
  return (
    <Typography variant="body2" color="#9A9A9A" align="center">
      {'Copyright © '}
      <Link color="#9A9A9A" href="https://mui.com/">
        WeAreSharers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer({ styling }) {
  return (
    <Box style={{ marginTop: '10rem', position: 'relative', width: '100%' }}>
      <Box sx={styling} component="footer">
        <div style={{ width: '1200px', height: '100px', margin: '0px auto' }}>
          <Box sx={footerBox}>
            <img
              src="https://i.lensdump.com/i/rLRO3c.png"
              style={{ maxWidth: '200px' }}
            ></img>
          </Box>
          <Copyright />
        </div>
      </Box>
    </Box>
  );
}
