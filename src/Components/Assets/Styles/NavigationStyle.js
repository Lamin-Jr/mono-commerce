import { makeStyles } from '@material-ui/core/styles';

const NavigationStyle = makeStyles(theme => ({
  rootForHome: {
    position: 'absolute',
    top: 0,
    paddingTop: '0',
    boxShadow: 'none',
    backgroundColor: '#fafafa00',
    '& a': {
      color: 'white',
    },
  },
  rootForBag: {
    position: 'absolute',
    top: 0,
    paddingTop: '0',
    boxShadow: 'none',
    backgroundColor: '#fafafa00',
    '& a': {
      color: 'black !important',
    },
  },

  Gridroot: {
    alignItems: 'center',
    color: 'white !important',
  },
  //Left Div container
  CollectionContainer: {
    flexGrow: 1,
  },
  CollectionItems: {
    margin: '0 30px',
    textDecoration: 'none',
    paddingTop: '30px',
    paddingBottom: 'auto',
    fontSize: '15px',
    fontWeight: '200',
  },

  //Logo Div container
  LogoDiv: {
    'text-align': 'center',
    paddingTop: '10px',
  },
  LogoText: {
    fontSize: '45px',
    fontWeight: '700',
    fontFamily: 'Helvetica Neue LT Std bold',
    letterSpacing: '1px',
    textDecoration: 'none',
  },

  //Right Div container
  functionalLinksContainers: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  functionalLinksItems: {
    margin: '0 30px',
    textDecoration: 'none',
    display: 'flex',
    fontWeight: '200',
    fontSize: '15px',
    '& svg': {
      height: '22px !important',
    },
  },
}));
export default NavigationStyle;
// '& a': {
//       margin: '0 30px',
//       textDecoration: 'none',
//       display: 'flex',
//     },
// functionalLinksContainers: {
//     display: 'flex',
//     justifyContent: 'flex-end',
//     '& a': {
//       margin: '0 30px',
//       textDecoration: 'none',
//       display: 'flex',
//     },
//   },
