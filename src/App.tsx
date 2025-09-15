import React from 'react';
import './App.css';
import data from "./components/accordian/data"
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMore from './components/load-more';
import TreeView from './components/tree-view';
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';
import SwitchMode from './components/switch-mode';
import ScrollIndicator from './components/scroll-indicator';

function App() {
  return (
    <div className="App">
      {/*<Accordian />*/}
      {/*<RandomColor />*/}
      {/*<StarRating numOfStars={10}/>*/}
      {/*<ImageSlider url={"https://picsum.photos/v2/list"} page={3} limit={6}/>*/}
      {/*<LoadMore/>*/}
      {/*<TreeView menus={menus}/>*/}
      {/*<QRCodeGenerator />*/}
      {/*<SwitchMode />*/}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
    </div>
  );
}

export default App;
