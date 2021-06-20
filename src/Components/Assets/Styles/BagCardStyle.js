import { makeStyles } from '@material-ui/core/styles';

const BagCardStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    boxShadow: 'none',
    borderRadius: '0px',
  },

  BagCardRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    height: '40vh',
    boxShadow: 'none',
    marginTop: '25px',
    borderBottom: '1px solid #D8D8D8',
    '& p': {
      fontSize: '15px',
      fontFamily: 'Helvetica Neue LT Std lite',
      color: 'black',
    },
  },
  details: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '19px',
    fontFamily: 'Helvetica Neue LT Std lite',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
  content: {
    flex: '1 0 auto',
  },
  imageDiv: {
    width: '30%',
    height: '80%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  deletButtonDiv: {
    width: '100%',
    display: 'flex',
    height: '20px',
    justifyContent: 'flex-end',
    paddingBottom: '25px',
    '& button': {
      borderRadius: '0px ',
      backgroundColor: 'white',
      color: 'black',
      boxShadow: 'none',
    },
  },
  quantityOption: {
    border: 'none',
  },
}));

export default BagCardStyles;
