import React from 'react';
import './App.scss';
import './assets/styles/general.scss';
import Countries from './assets/components/Countries/Countries';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section class="row">
          <div class="card__collection clear-fix">
            <Countries/>
            <Countries/>
            <Countries/>
            <Countries/>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
