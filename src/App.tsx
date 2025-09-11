import React from 'react';
import './App.css';
import data from "./components/accordian/data"
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/*<Accordian />*/}
      {/*<RandomColor />*/}
      {/*<StarRating numOfStars={10}/>*/}
      <ImageSlider url={"https://picsum.photos/v2/list"} page={3} limit={6}/>
    </div>
  );
}

export default App;
