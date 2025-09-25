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
import TabTest from './components/tab/tab-test';
import ModalTest from './components/modal-popup/modal-test';
import GithubProfileFinder from './components/github-profile-finder';
import SearchAutocomplete from './components/search-autocomplete';
import TicTacToe from './components/tic-tac-toe';
import FeatureFlags from './components/feature-flag';
import FeatureFlagsGloubalState from './components/feature-flag/context';
import UseFetchTest from './components/use-fetch/test';
import OutsideClickTest from './components/use-outside-click/test';
import WindowSizesTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-top-and-bottom';
import ScrollToSection from './components/scroll-to-section';

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
      {/*<ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>*/}
      {/*<TabTest/>*/}
      {/*<ModalTest />*/}
      {/*<GithubProfileFinder />*/}
      {/*<SearchAutocomplete />*/}
      {/*<TicTacToe/>*/}
      {/*<FeatureFlagsGloubalState>
          <FeatureFlags/>
      </FeatureFlagsGloubalState>*/}
      {/*<UseFetchTest />*/}
      {/*<OutsideClickTest/>*/}
      {/*<WindowSizesTest />*/}
      {/*<ScrollToTopAndBottom />*/}
      <ScrollToSection/>
    </div>
  );
}

export default App;
