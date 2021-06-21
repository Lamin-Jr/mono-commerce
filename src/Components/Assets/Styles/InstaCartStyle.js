import { makeStyles } from '@material-ui/core/styles';

const InstaCartStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: '100px',
    height: '90vh',
    [theme.breakpoints.down('md')]: {
      height: 'auto',
    },
  },
  gridList: {
    width: '50%',
    height: '90vh',
    margin: '0',
    paddingTop: '2px',
    '& li': {
      width: '50% !important',
      height: '45vh !important',
      margin: '0',
      padding: '0 !important',
    },
    [theme.breakpoints.down('md')]: {
      width: '80%',
      height: 'auto',
      '& li': {
      width: '50% !important',
      height: '90vh !important',
      margin: '0',
      padding: '0 !important',
    },
    },
  },
  firstImg: {
    display: 'flex',
    width: '50%',
    height: '90vh',
    backgroundSize: 'cover',
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
  },
  titleDiv: {
    display: 'flex',
    width: '100%',
    marginBottom: '30px',
    '& span': {
      marginRight: '40px',
    },
  },
}));
export default InstaCartStyle;
