import { makeStyles } from '@material-ui/core/styles';

const HeroStyle = makeStyles(theme => ({
  homeRoot: {
    margin: 0,
  },
  //Hero Container Styling
  HeroBottomLeft: {
    margin: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flext-start',
    alignItems: 'flex-end',
    repeat: 'no-repeat',
    backgroundSize: 'cover',
    left: '20%',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center',
    },
  },
  HeroTopLeft: {
    margin: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'flext-start',
    alignItems: 'flex-start',
    repeat: 'no-repeat',
    backgroundSize: 'cover',
    left: '20%',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center',
    },
  },
  HeroBottomRight: {
    margin: 0,
    width: '100%',
    height: '100vh',
    backgroundColor: 'brown',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    repeat: 'no-repeat',
    backgroundSize: 'cover',
    left: '20%',
    [theme.breakpoints.down('md')]: {
      backgroundPosition: 'center',
    },
  },
  //General Hero Content Styling
  HeronContends: {
    color: 'white',
    width: '40%',
    '& button': {
      width: 'auto',
      backgroundColor: 'transparent',
      padding: '19px',
      color: 'white',
      border: '0.9px solid white',
      fontSize: '20px',
    },
    '& h2': {
      color: 'white',
      fontFamily: 'Helvetica Neue LT Std lite',
      fontSize: '50px',
      maxHeight: '1vh',
      [theme.breakpoints.down('md')]: {
      
      maxHeight: '1vh',
    },
      [theme.breakpoints.down('sm')]: {
      
      maxHeight: '6vh',
    },
    },
    '& p': {
      color: 'white',
    },
  },

  //Hero Contend marging Styling
  bottomLeft: {
    display: 'flex',
    justifyContent: 'flext-start',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginLeft: '15%',
    marginBottom: '5%',
  },
  topLeft: {
    display: 'flex',
    justifyContent: 'flext-start',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginLeft: '15%',
    marginTop: '15%',
  },
  bottomRight: {
    display: 'flex',
    justifyContent: 'flext-start',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
    marginRight: '15%',
    marginBottom: '5%',
  },
}));

export default HeroStyle;
