import { Box, Link, Typography } from '@mui/material';

// Footer CSS
import { copyrightTypoWrap, footerBox } from '../../globalCss.js';

function Copyright() {
  return (
    <Typography
      variant="body2"
      color="#9A9A9A"
      align="center"
      sx={{ ...copyrightTypoWrap }}
    >
      <span className="copyright">Copyright © 2022.</span>
      <span className="copyright">WeShare All rights reserved.</span>
    </Typography>
  );
}
export default function Footer({ styling }) {
  return (
    <Box style={{ marginTop: '10rem', position: 'relative', width: '100%' }}>
      <Box sx={styling} component="footer">
        <div className="footerWrap">
          <Box sx={footerBox}>
            <Link href="/">
              <img
                src="https://i.lensdump.com/i/rLRO3c.png"
                style={{ maxWidth: '200px' }}
              ></img>
            </Link>
          </Box>
          <Copyright />
        </div>
      </Box>
    </Box>
  );
}
