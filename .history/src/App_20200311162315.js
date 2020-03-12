import React from 'react';
import logo from './logo.svg';
import './App.scss';
import './App'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {countryCard({
          imgSrc: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0090%2F5072%2Fproducts%2FCountry_Flag_of_China.png%3Fv%3D1485422067&imgrefurl=https%3A%2F%2Fwww.amnautical.com%2Fcollections%2Fflags-starting-with-c%2Fproducts%2Fchina-country-flag&tbnid=08i1yJkoooZcrM&vet=12ahUKEwjftPicppLoAhUX-xoKHbu1DnkQMygAegUIARCLAg..i&docid=8h6bU9AoahbScM&w=2000&h=1333&q=country%20flag&hl=en&ved=2ahUKEwjftPicppLoAhUX-xoKHbu1DnkQMygAegUIARCLAg",
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
