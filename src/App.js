import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Ui Import {NavBar and Footer}
import Navigation from './Components/Assets/NavigationAssets/Navigation';
import Footers from './Components/Assets/FooterAssets/Footers';

//Pages Imports
import Home from './Components/Pages/Home';
import Bag from './Components/Pages/Bag';
import Shop from './Components/Pages/Shop.js'

//Product Data Import
import ProductAPI from './Components/Data/ProductData.json';

//Bag Local storage: to store the product added to the Bag
const BagLocalStorage = JSON.parse(localStorage.getItem([""])) || [];

export default function App() {
  const [AddToBag, setAddToBag] = useState(BagLocalStorage.map(a=> a) !== []? BagLocalStorage : []);

  useEffect(() => {
    //Local Storage
    localStorage.setItem('', JSON.stringify(AddToBag));

  }, [AddToBag]);

  
  

  //Add TO BAG FUNCTION
  const AddToBagFunction = product => {
    setAddToBag([...AddToBag, product]);
  };

  //REMOVE FROM BAG FUNCTION
  const removeFromBag = productremove => {
    setAddToBag(AddToBag.filter((product, i) => i !== productremove));
  };

  return (
    <div>
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
              Total={AddToBag}
            />
          </Route>
          <Route> 
          <Shop />
          </Route>
        </Switch>
      </div>
      <Footers />
    </Router></div>
    
  );
}
