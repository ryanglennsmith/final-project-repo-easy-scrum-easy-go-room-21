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
    <Box style={{ marginTop: '10rem' }}>
      <Box sx={styling} component="footer">
        <Box sx={footerBox}>
          <img
            src="https://i1.lensdump.com/i/reF4Pa.png"
            style={{ maxWidth: '20rem' }}
          ></img>
        </Box>
        <Copyright />
      </Box>
    </Box>
  );
}
