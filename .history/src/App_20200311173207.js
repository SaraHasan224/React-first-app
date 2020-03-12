import React from 'react';
import './App.scss';
import './assets/styles/general.scss';
import countryCard from './assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://i.pinimg.com/originals/ec/b3/c2/ecb3c2420ff9b8a4b3984a856ea4106c.jpg",
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
