import React from 'react';
import './App.scss';
import countryCard from './assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "11https://image.shutterstock.com/image-photo/nice-sunset-600w-129785939.jpg",
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
