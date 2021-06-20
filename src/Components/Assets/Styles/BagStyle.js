import { makeStyles } from '@material-ui/core/styles';

const BagStyle = makeStyles(theme => ({
  BagRoot: {
    margin: '0 30% 10%',
    padding: '100px 0 0 0',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  BagCardDiv: {
    display: 'flex',
    justifyContent: 'center',
    width: '70VH',
  },
  brnadTitle: {},

  hrDiv: {
    width: '100%',
    display: 'flex',
  },
  Title: {
    display: 'flex',
    width: '100%',
    '& p': {
      width: '100%',
    },
  },
  bagFooter: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '10px',
    justifyContent: 'center',
    '& span': {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
  },
  ProceedButtonDiv: {
    height: '45%',
    padding: '15px 0 15px',
  },
  ProceedButton: {
    width: '50%',
    backgroundColor: 'black',
    color: 'white',
    paddingTop: '20px 15px',
    boxShadow: 'none',
    borderColor: 'black',
    fontSize: '20px',
  },
  Total: {
    fontSize: '20px',
  },
  CardIcons: {
    '& svg': {
      height: '70%',
      width: '10%',
    },
  },
}));

export default BagStyle;
