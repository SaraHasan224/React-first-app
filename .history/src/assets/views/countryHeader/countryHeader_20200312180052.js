import React from 'react';
import './countryHeader.scss'
import logo from '../';


function countryHeader(props)
{
    return (
        <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href="#!"><img src={logo} className="App-logo" alt="logo" /></a>
          </div>
          <nav>
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul class="nav-list">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">Pricing</a>
              </li>
              <li>
                <a href="#!">Portfolio</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    )
}

export default countryHeader

