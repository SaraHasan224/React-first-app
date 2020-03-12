import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './assets/views/countryCard/countryCard'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://www.google.com/imgres?imgurl=",
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
