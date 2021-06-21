import React, {useState, useEffect} from 'react'
import BagCard from '../Assets/BagAssets/BagCard';
import Typography from '@material-ui/core/Typography';
import CreditCardIcon from '@material-ui/icons/CreditCard';

import BagStyle from '../Assets/Styles/BagStyle';

const Bag = props => {
  const classes = BagStyle();
  const total = props.Total;
  const [BagTotal, setBatTotal] = useState(0);

  useEffect(() => {
    //Total count fUNCTION, count to count the price of total Items added to the bag 
    setBatTotal(total.map(a => a.price).reduce((a, b) => a + b, 0))
  },[total])

  

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
        <span className={classes.Total}>Total USD $ {BagTotal}</span>
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
