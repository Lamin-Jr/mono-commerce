import FootersCard from './FooterAssets/FootersLinksCard';
import SignUpCard from './FooterAssets/SignUpCard';
import FootersStyles from '../Styles/FootersStyle';

const Footers = () => {
  const classes = FootersStyles();

  return (
    <div className={classes.root}>
      <div className={classes.FooterFormDiv}>
        <SignUpCard />
      </div>
      <div className={classes.FooterLinkDiv}>
        <FootersCard
          Title={'CUSTOMER SERVICE'}
          Link1={'CONTACTS'}
          Link2={'TRACK ORDER'}
          Link3={'DELIVERY & RETURNS'}
          Link4={'PAYMENT'}
          Link5={'MAKE A RETURN'}
          Link6={'MAKE A RETURN'}
          Link7={'FAQ'}
        />
        <FootersCard
          Title={'INFO'}
          Link1={'GIFT VOUCHERS'}
          Link2={'SIZE GUIDE'}
          Link3={'CAREERS AT MODNIKKY'}
          Link4={'ABOUT US'}
          Link5={'LEGAL POLICIES'}
        />
        <FootersCard
          Title={'FOLLOW US'}
          Link1={'FACEBOOK'}
          Link2={'ODNOKLASSNIKI'}
          Link3={'INSTAGRAM'}
        />
        <FootersCard
          Title={'CONTACT US'}
          Link1={'hello@modnikky.com'}
          Link2={'+7 910 832 26XX'}
          Link3={'Visit us at Shalalaeva 23, Bologoe, Russia'}
        />
      </div>
    </div>
  );
};
export default Footers;
