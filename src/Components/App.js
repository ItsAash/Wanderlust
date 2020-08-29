import React from 'react';
import '../styles/App.css';

import Header from './Header.js';
import { BannerContainer } from '../Containers/BannerContainer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <BannerContainer />

    </div>
  );
}

export default App;
