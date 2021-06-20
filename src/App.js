import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Ui Import {NavBar and Footer}
import Navigation from './Components/Assets/NavigationAssets/Navigation';
import Footers from './Components/Assets/FooterAssets/Footers';

//Pages Imports
import Home from './Components/Pages/Home';
import Bag from './Components/Pages/Bag';

//Product Data Import
import ProductAPI from './Components/Data/ProductData.json';

//Bag Local storage: to store the product added to the Bag
const BagLocalStorage = JSON.parse(localStorage.getItem('bag')) || '[]';

export default function App() {
  const [AddToBag, setAddToBag] = useState(BagLocalStorage);
  const [BagTotal, setBagTotal] = useState(0);

  useEffect(() => {
    //Local Storage
    localStorage.setItem('bag', JSON.stringify(AddToBag));

    //Bag Total State
    setBagTotal(() => {
      if (AddToBag.length !== 0) {
        return AddToBag.map(a => a.price).reduce((a, b) => a + b);
      } else {
        return 0;
      }
    });
  }, [AddToBag, BagTotal]);

  //Add TO BAG FUNCTION
  const AddToBagFunction = product => {
    setAddToBag([...AddToBag, product]);
  };

  //REMOVE FROM BAG FUNCTION
  const removeFromBag = productremove => {
    setAddToBag(AddToBag.filter((product, i) => i !== productremove));
  };

  return (
    <Router>
      <Navigation BagItem={AddToBag.length} />
      <div>
        <Switch>
          <Route exact path="/">
            <Home AddToCart={AddToBagFunction} ProductsData={ProductAPI} />
          </Route>
          <Route path="/bag">
            <Bag
              AddToBagData={AddToBag}
              onRemoveFromBag={removeFromBag}
              BagLenght={AddToBag.length}
              Total={BagTotal}
            />
          </Route>
        </Switch>
      </div>
      <Footers />
    </Router>
  );
}
