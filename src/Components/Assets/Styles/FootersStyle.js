import { makeStyles } from '@material-ui/core/styles';

const FootersStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    'flex-wrap': 'wrap',
    justifyContent: 'center',
    // width: '90%',
    // margin: '100px',
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down('md')]: {
      
      flexWrap: 'wrap'
      
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  FooterFormDiv: {
    display: 'flex',
    width: '100%',
    margin: '0 100px',
    justifyContent: 'center',
  },
  FooterLinkDiv: {
    display: 'flex',
    width: '100%',
    margin: '0 100px',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
     display: 'flex',
     flexWrap: 'wrap',
     width: '50%',
    },
  },
}));

export default FootersStyles;
