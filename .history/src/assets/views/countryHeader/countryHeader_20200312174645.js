import React from 'react';
import './countryCard.scss'


function countryHeader(props)
{
    return (
                // <div class="cards cards--two">
                //             <img src={props.imgSrc} alt="country-flag" class="img-responsive" />
                //             <span class="cards--two__rect"></span>
                //             <span class="cards--two__tri"></span>
                //             <p class="first">{props.name} </p>
                //             <p class="second">{props.population} </p>
                //             <p class="third"><button onClick={props.callback}>{props.buttonText}</button></p>
                // </div>
                <div className="country-card col-md-3">
                    <div className="country-card__image">
                    <img src={props.imgSrc} alt="country-flag" class="img-responsive" />
                    </div>
                    <h5>{props.name}</h5>
                    <p>{props.population}</p>
            
                    <button className="button button--primary" 
                    onClick={props.callback}>{props.buttonText}</button>
                </div>
    )
}

export default countryHeader

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>