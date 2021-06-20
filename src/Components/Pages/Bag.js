import BagCard from '../Assets/BagAssets/BagCard';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import BagStyle from '../Assets/Styles/BagStyle';

const Bag = props => {
  const classes = BagStyle();
  return (
    <div className={classes.BagRoot}>
      <div className={classes.Title}>
        <Typography>
          <span style={{ fontSize: '20px' }}>BAG </span>
          <span style={{ color: '#7b7575' }}>{props.BagLenght} Item</span>
        </Typography>
      </div>
      <hr className={classes.hrDiv} />
      <div className={classes.BagCardDiv}>
        <BagCard
          AddToBagData={props.AddToBagData}
          onRemoveFromBag={props.onRemoveFromBag}
        />
      </div>
      <div className={classes.bagFooter}>
        <span className={classes.Total}>Total USD ${props.Total}</span>
        <span className={classes.ProceedButtonDiv}>
          <button className={classes.ProceedButton}>PROCEED TO CHECKOUT</button>
        </span>
        <span className={classes.CardIcons}>
          <CreditCardIcon />
          <CreditCardIcon />
        </span>
      </div>
    </div>
  );
};
export default Bag;
