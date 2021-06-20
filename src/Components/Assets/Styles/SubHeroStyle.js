import { makeStyles } from '@material-ui/core/styles';

const SubHeroStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '80vh',
    transform: 'translateZ(0)',
    '& li': {
      width: '33% !important',
      height: '100% !important',
      padding: 0,
    },
  },
  titleBar: {
    background: 'transparent',
  },
  icon: {
    color: 'white',
  },
}));
export default SubHeroStyles;
