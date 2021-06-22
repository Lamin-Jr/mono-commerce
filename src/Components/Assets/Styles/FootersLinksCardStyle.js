import { makeStyles } from '@material-ui/core/styles';

const FootersLinksCardStyle = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& span': {
      color: '#000F08',
      fontSize: '15px',
      letterSpacing: '1px',
      fontFamily: 'Helvetica Neue LT Std lite !important ',
    },
    '& .MuiListItem-button': {
      height: '25px',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap'
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  Title: {
    fontSize: '20px !important',
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Helvetica Neue LT Std lite !important ',
    [theme.breakpoints.down('md')]: {
      fontWeight: '200',
    },
  },
  LinkIcon: {
    minWidth: 'auto',
  },
}));

export default FootersLinksCardStyle;
