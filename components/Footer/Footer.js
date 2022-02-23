import { Box, Link, Typography } from '@mui/material';

// Footer CSS
import {
  footerContainerBox,
  footerBox,
  footerTypography,
} from '../../globalCss.js';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        WeAreSharers
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Footer() {
  return (
    <Box sx={footerContainerBox} component="footer">
      <Box sx={footerBox}>
        <img
          src="https://i1.lensdump.com/i/re9GT7.png"
          style={{ maxWidth: '4rem' }}
        ></img>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={footerTypography}
        >
          WeAreSharers
        </Typography>
      </Box>
      <Copyright />
    </Box>
  );
}
