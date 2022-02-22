import { Box, Link, Typography } from '@mui/material';

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
    <Box
      sx={{
        bgcolor: '#555555',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: '1rem 4rem',
        color: '#9A9A9A',
      }}
      component="footer"
    >
      <Box sx={{ display: 'flex', justifyContent: 'column' }}>
        <img
          src="https://i1.lensdump.com/i/re9GT7.png"
          style={{ maxWidth: '4rem' }}
        ></img>
        <Typography
          variant="h6"
          align="center"
          gutterBottom
          sx={{ maxWidth: '20rem', color: '#9A9A9A' }}
        >
          WeAreSharers
        </Typography>
      </Box>
      <Copyright />
    </Box>
  );
}
