import React from 'react';
import './countryHeader.scss'
import logo from '../../../logo.svg';


function countryHeader(props)
{
    return (
        <section class="navigation">
        <div class="nav-container">
          <div class="brand">
            <a href={"/"}><img src={logo} className="App-logo" alt="logo" /></a>
          </div>
          <nav>
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
            <ul class="nav-list">
              { 
                props.navigation.map((nav, index) => {
                  return(
                    <Link to={"/"} class="button">{CData.backBtn}</Link>
                    <li key={index} onClick={nav.link}>
                      <a href="#">{nav.title}</a>
                      
                    </li>
                  )
                })
              }  
            </ul>
          </nav>
        </div>
      </section>
    )
}

export default countryHeader

