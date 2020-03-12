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
          {countryCard({
                                imgSrc: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
                                name: "Country flag",
                                population: 200,
                                buttonText: "Click Me!",
                                callback: null
                            })}
            {countryCard({
                                imgSrc: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
                                name: "Country flag",
                                population: 200,
                                buttonText: "Click Me!",
                                callback: null
                            })}
            <Countries/>
            <Countries/>
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
