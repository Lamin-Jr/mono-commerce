import React from 'react';
import HomeStyle from '../Assets/Styles/HomeStyle';
import HeroContainer from '../Assets/HomAssets/HeroContainer/HeroContainers';
import HeroStyle from '../Assets/Styles/HeroStyle';
import SubHero from '../Assets/HomAssets/SubHero/subHero';
import ProductCard from '../Assets/ProductAssets/ProductCart';
import InstaCart from '../Assets/InstagramCartAssets/InstaCard';
import { Typography } from '@material-ui/core';

const Home = props => {
  const classes = HomeStyle();
  const heroClasses = HeroStyle();

  return (
    <div className={classes.homeRoot}>
      {
        //FIRST HERO //
      }
      <HeroContainer
        bgImage={'url(/img/BlackGirl.jpg)'}
        Title="NEW COLLECTION"
        Button="SHOP NEW ARRIVALS"
        content="Our easiest chuck-on-and-go staples come with a serious style heritage
          that’s liberating, sexy, comfy and supremely cool."
        HeroType={heroClasses.HeroBottomLeft}
        type={heroClasses.HeronContends}
        ContentStyle={heroClasses.bottomLeft}
      />
      <HeroContainer
        bgImage={'url(/img/andrea.jpg)'}
        Title="VINTAGE INSPIRED"
        Button="SHOP NOW"
        content="Inspired by the ‘70s and 80’s), we know that if you sift through our vintage inspired collection you’re gonna rock the perfect silhouette. "
        HeroType={heroClasses.HeroTopLeft}
        type={heroClasses.HeronContends}
        ContentStyle={heroClasses.topLeft}
      />
      <SubHero />
      <HeroContainer
        bgImage={'url(/img/jacob.jpg)'}
        Title="SUSTAINABLE DENIM"
        Button="SHOP DENIM"
        content="What started as a true ‘80s vintage pair of jeans, finished as a re-energised, wider leg vintage jean with versatile detailing."
        HeroType={heroClasses.HeroTopLeft}
        type={heroClasses.HeronContends}
        ContentStyle={heroClasses.topLeft}
      />
      {
        //Product Cards On Hompage
      }
      <ProductCard Data={props.ProductsData} onAddToCart={props.AddToCart} />

      <HeroContainer
        bgImage={'url(/img/michelle.jpg)'}
        Title="PRAY FOR ROCK"
        Button="SHOP COLLECTION"
        content="Beloved and forever relevant, there’s a convenience factor in a well-built pair of all-in-ones."
        HeroType={heroClasses.HeroBottomRight}
        type={heroClasses.HeronContends}
        ContentStyle={heroClasses.bottomRight}
      />
      <InstaCart />
      <Typography className={classes.brnadTitle}>#MODNIKKY</Typography>
    </div>
  );
};

export default Home;
