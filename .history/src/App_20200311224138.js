import React from 'react';
import './App.scss';
import './assets/styles/general.scss';
import Countries from './assets/components/Countries/Countries';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Countries/>
        
      </header>
    </div>
  );
}

export default App;
