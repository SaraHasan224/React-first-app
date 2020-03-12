import React from 'react';
import './App.scss';
import './assets/styles/general.scss';
import countryCard from './assets/views/countryCard/countryCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7b6f9f66136247.5b0c452b2da75.jpg",
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
