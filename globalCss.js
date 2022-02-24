// *******General CSS*******
export const centerContentRow = {
  display: 'flex',
  flexDirection: 'row',
};
export const centerContentCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

// *******NAVBAR CSS*******
export const navBarApp = {
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const navBarToolBar = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '80%',
};

export const navBarContainer = {
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
};

export const navBarBox = {
  display: 'flex',
  wrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  width: '50%',
  gap: '2rem',
};

export const navbarButton = {
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#FF8957' },
  fontFamily: 'Inter',
  fontStyle: 'normal',
  letterSpacing: '0em',
};

export const navbarSidePageBox = {
  backgroundColor: '#FF8957',
};

// ********* COURSECARD CSS *******
export const courseCardContainer = {
  py: 6,
};

export const courseCardCardSection = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
};

export const courseCardCardMedia = { padding: '1.5rem', pt: '2rem' };

export const courseCardCardContent = { flexGrow: 1 };

// *******BANNER CSS*******
export const bannerBox = {
  backgroundImage: 'url("https://i.lensdump.com/i/redSH7.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#555555',
  backgroundSize: '160rem',
  width: '100%',
};

export const bannerContainer = {
  background: 'transparent',
  width: '100vw',
  padding: '5rem 0rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

// Webpage size for header
export const bannerTypographyWeb = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '50rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '72px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '58.09px',
  letterSpacing: '0em',
  textAlign: 'center',
};

// Mobile size for header
export const bannerTypographyMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '25rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '60px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '58.09px',
  letterSpacing: '0em',
  textAlign: 'center',
};

// Webpage size for sub header
export const bannerTypographySubWeb = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '20rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'center',
};

// Mobile size for sub header
export const bannerTypographySubMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '40rem',
  color: '#fff',
  fontFamily: 'Inter',
  fontSize: '26px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px',
  letterSpacing: '0em',
  textAlign: 'center',
};

export const bannerStack = {
  pt: 4,
};

// Web size for the search field
export const bannerTextFieldWeb = {
  background: '#fff',
  borderRadius: '6px',
  width: '20rem',
};

// Mobile size for the search field
export const bannerTextFieldMobile = {
  background: '#fff',
  borderRadius: '6px',
  width: '10rem',
};

export const bannerButton = {
  marginRight: '5rem',
  color: '#fff',
  background: '#FF8957',
  fontFamily: 'Inter',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'center',
};

// *******Footer CSS*******
export const footerContainerBoxMd = {
  bgcolor: '#555555',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  padding: '1rem 4rem',
  color: '#9A9A9A',

  left: '0',
  width: '100%',
  bottom: '110',
};

export const footerContainerBoxLgr = {
  bgcolor: '#555555',
  display: 'flex',
  justifyContent: 'space-around',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  padding: '1rem 4rem',
  color: '#9A9A9A',

  position: 'absolute',
  bottom: '0',
  width: '100%',
};
export const footerBox = { display: 'flex', justifyContent: 'column' };

export const footerTypography = { maxWidth: '20rem', color: '#9A9A9A' };

// *******Profile CSS*******

export const titleTypo = {
  fontFamily: 'Roboto',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const nameTypo = {
  fontFamily: 'Rhodium Libre',
  fontSize: '24px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '41.04px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const subHeadingTypo = {
  fontFamily: 'Roboto',
  fontSize: '36px',
  fontStyle: 'normal',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const generalTypo = {
  fontFamily: 'Roboto',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '300',
  lineHeight: '19px',
  letterSpacing: '0rem',
  textAlign: 'left',
};

export const aboutSection = {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  width: '70%',
};

export const profileSearchBar = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  margin: '4rem 0',
};
