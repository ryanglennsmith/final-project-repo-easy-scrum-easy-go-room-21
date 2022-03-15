import ReviewSection from '@components/ReviewSection/ReviewSection';

// *******General CSS*******
export const centerContentRow = {
  display: 'flex',
  flexDirection: 'row',
  fontSize: '15px',
  paddingTop: '15px',
  height: '30px',
  lineHeight: '30px',
  alignItems: 'center',
};
export const centerContentCol = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0!important',
};

// Uses margin "0 auto" instead
export const centerBoxContent = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 auto',
};

// *******NAVBAR CSS*******
export const navBarApp = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const navBarToolBar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '1200px',
  padding: 0,
};

export const navBarContainer = {
  display: 'flex',
  justifyContent: 'center',
};

export const navBarBox = {
  display: 'flex',
  wrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
};

export const navbarButton = {
  color: '#fff',
  background: '#ff7e47',
  '&:hover': { background: '#ee6024' },
  fontFamily: 'lato',
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
  alignItems: 'center',
};

export const courseCardCardMedia = {};

export const courseCardCardContent = {
  flexGrow: 1,
  padding: '20px!important',
};

export const courseCardContentTitle = {
  fontFamily: 'Lato',
  fontWeight: '600',
  color: '#222',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  width: '20rem',
};

export const courseCardContentTeacherName = {
  fontFamily: 'Rhodium Libre',
  fontWeight: '300',
  fontSize: '18px',
  textAlign: 'right',
  color: '#aaa',
  marginBottom: '10px',
};
export const courseCardContentCourseBrief = {
  fontFamily: 'Roboto',
  fontWeight: '300',
  fontSize: '16px',
  color: '#555',
  marginBottom: '10px',
  display: '-webkit-box',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

export const courseCardActions = {
  width: '100%',
  justifyContent: 'space-evenly',
  paddingBottom: '20px',
};

export const courseCardRateAvg = {
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: '400',
  color: '#faaf00',
};
export const courseCardReviewCount = {
  fontFamily: 'Roboto',
  fontSize: '15px',
  fontWeight: '400',
  color: '#666',
  marginLeft: '0!important',
  marginRight: '40px',
};
export const courseCardButton = {
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#ff763c', border: 'none' },
  border: 'none',
};

// *******BANNER CSS*******
export const bannerBox = {
  backgroundImage: 'url("https://i.lensdump.com/i/redSH7.png")',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundColor: '#555555',
  backgroundSize: '160rem',
  width: '100%',
  height: '600px',
};

export const bannerContainer = {
  background: 'transparent',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '80%',
};

// Webpage size for header
export const bannerTypographyWeb = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  borderRadius: '6px',
  width: '50rem',
  color: '#fff',
  fontFamily: 'Roboto',
  fontSize: '60px',
  fontWeight: '700',
  letterSpacing: '-0.5px',
  textAlign: 'center',
};

// Mobile size for header
export const bannerTypographyMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '25rem',
  color: '#fff',
  fontSize: '60px',
  fontWeight: '700',
};

// Webpage size for sub header
export const bannerTypographySubWeb = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '1000px',
  color: '#eee',
  fontFamily: 'Roboto',
  fontSize: '25px',
  fontWeight: '200',
  lineHeight: '35px',
  textShadow: '1px 1px 10px #000',
  paddingTop: '15px',
};

// Mobile size for sub header
export const bannerTypographySubMobile = {
  display: 'flex',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '40rem',
  color: '#fff',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
};

export const bannerStack = {
  pt: 4,
};

// Web size for the search field
export const bannerTextFieldWeb = {
  background: '#fff',
  width: '30rem',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '10px',
};

// Mobile size for the search field
export const bannerTextFieldMobile = {
  background: '#fff',
  width: '10rem',
};

export const bannerButton = {
  marginRight: '5rem',
  color: '#fff',
  background: '#ff7e47',
  '&:hover': { background: '#ee6024' },
  fontFamily: 'lato',
  fontSize: '18px',
  fontWeight: '500',
  border: 'none',
  borderRadius: '5px',
};

// *******Footer CSS*******
export const footerContainerBoxMd = {
  bgcolor: '#555555',
  display: 'flex',
  padding: 0,
  left: '0',
  width: '100%',
  bottom: '110',
};

export const footerContainerBoxLgr = {
  bgcolor: '#555555',
  display: 'flex',
  position: 'absolute',
  bottom: '0',
  width: '100%',
};
export const footerBox = {};

export const copyrightTypoWrap = { maxWidth: '20rem', color: '#9A9A9A' };

// *******Profile CSS*******

export const titleTypo = {
  fontFamily: 'sans-serif',
  fontSize: '40px',
  fontStyle: 'normal',
  fontWeight: '800',
  lineHeight: '40px',
  letterSpacing: '-1px',
  textAlign: 'left',
  width: '620px',
};

export const nameTypo = {
  fontFamily: 'Rhodium Libre',
  margin: '20px 0 15px 0',
  fontSize: '25px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '41.04px',
  letterSpacing: '0em',
  textAlign: 'left',
  color: '#888',
};

export const subHeadingTypo = {
  fontFamily: 'Roboto',
  fontSize: '36px',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const generalTypo = {
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: '300',
  letterSpacing: '0.02em',
  color: '#555',
  textAlign: 'left',
  lineHeight: '30px',
};

export const daysTypo = {
  fontFamily: 'lato',
  fontSize: '16px',
  fontWeight: '300',
  color: '#aaa',
  marginRight: '5px',
  letterSpacing: 0,
  padding: '0 5px',
  borderRadius: '2px',
};

export const ratingTypo = {
  fontFamily: 'Roboto',
  fontSize: '18px',
  fontWeight: '300',
  marginLeft: '5px',
  color: ' #666',
};

export const aboutSection = {
  display: 'flex',
  flexDirection: 'column',
  margin: '65px auto',
  width: '1200px',
};

export const aboutSectionType = {
  fontFamily: 'lato',
  fontWeight: 400,
  padding: '50px 0 20px 0',
  color: '#333',
};

export const profileSearchBar = {
  display: 'flex',
  margin: '4rem 0',
  width: '1200px',
  margin: 'auto',
};

export const profileSearchBarInput = {
  width: '100%',
  marginRight: '15px',
  background: '#fff',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  paddingLeft: '10px',
};

export const showMoreLessButton = {
  color: '#fff',
  background: '#FF8957',
  '&:hover': { background: '#ff763c' },
  border: 'none',
  margin: '3rem',
};

export const tagsBtn = {
  background: '#fff',
  '&:hover': { background: '#eee' },
  color: '#555',
  fontFamily: 'Lato',
  border: '1px solid #ccc',
  borderRadius: '1px',
  padding: '5px 12px',
};
export const tagsBtnMainpage = {
  background: '#fff',
  '&:hover': { background: '#eee' },
  color: '#555',
  fontFamily: 'Lato',
  border: '1px solid #ccc',
  borderRadius: '1px',
  padding: '1px 3px',
};

export const contactBtn = {
  color: '#777',
  fontSize: '16px',
  fontFamily: 'Lato',
  width: '100%',
  background: '#f7f7f7',
  border: '1px solid #eee',
  marginTop: '15px',
};

// reviewSection.js

export const addReviewBtn = {};
export const fontLato = { fontFamily: 'Lato' };
export const fontRoboto = { fontFamily: 'Roboto' };
export const addReviewButton = {
  width: '1200px',
  height: '50px ',
  fontSize: '18px',
};

//   Profile Page

export const subHeadingTypoProfile = {
  fontFamily: 'Roboto',
  fontSize: '32px',
  fontWeight: '700',
  lineHeight: '40px',
  letterSpacing: '0em',
  textAlign: 'left',
};

export const profileTextfields = {
  margin: '10px 0',
  fontSize: '30px',
  height: 'auto',
};
export const profileUpdateTextfields = { margin: '20px 0' };

// dashboard CSS
export const dashboardTopBox = { width: '100%' };

export const dashboardContainer = {
  paddingLeft: '0!important',
  paddingRight: '0!important',
};

export const greetingTxt = {
  color: '#eee',
  height: '35px',
  width: '600px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
};

export const dashboardBtnGridWrap = {
  paddingBottom: '20px',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingBottom: '0!important',
};

export const dashboardBtnGrid = {};
export const dashboardContentsCard = { padding: '25px' };
export const dashboardBtn = {
  '&:hover': { background: '#00632b' },
  padding: '10px 20px',
  borderRadius: '30px',
  background: '#008d3e',
  color: '#fff',
};

export const dashboardContentsGrid = { maxWidth: '48%!important' };
export const dashboardContentsCardTypo = {
  fontSize: '30px',
  fontFamily: 'lato',
};

// Add course Component\
export const addCourseComponentBoxWrap = { paddingBottom: '50px' };
export const addCourseComponentBoxWrap2 = {
  display: 'flex',
  flexWrap: 'nowrap',
  flexDirection: 'column',
  width: '100%',
  paddingBottom: '50px',
  paddingTop: '10px',
};

export const addCourseComponentBoxTypo = {
  fontWeight: '600',
  fontSize: '22px',
  paddingBottom: ' 15px',
  color: '#222',
  fontFamily: 'lato',
};
export const submitBtnBox = {
  width: '100%',
  paddingBottom: '30px',
};

export const dashboardSubminBtn = { width: '100%', height: '45px' };
