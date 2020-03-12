import React from 'react';
import './App.scss';
import './assets/styles/general';
import countryCard from './assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://image.shutterstock.com/image-vector/abstract-geometric-pattern-lines-rhombuses-260nw-573952828.jpg",
          name: "Country flag",
          population: 200,
          buttonText: "Click Me!",
          callback: null
        })}
      </header>
    </div>
  );
}

export default App;
