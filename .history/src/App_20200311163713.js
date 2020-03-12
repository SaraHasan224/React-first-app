import React from 'react';
import './App.scss';
import countryCard a'./assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://images.app.goo.gl/R813CjyPNVqUBcPN9",
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
