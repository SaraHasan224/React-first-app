import React from 'react';
import './App.scss';
import countryCard from './assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://pixabay.com/images/id-736885/",
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
