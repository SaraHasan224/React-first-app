import React from 'react';
import './countryCard.scss'


function countryCard(props)
{
    return (
        <div class="col-md-4">
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                            <img src={props.imgSrc} alt="country-flag" class="img-responsive" alt="Cards Image"/>
                            <span class="cards--two__rect"></span>
                            <span class="cards--two__tri"></span>
                            <p class="first">{props.name} </p>
                            <p class="second">{props.population} </p>
                            <p class="third"><button onClick={props.callback}>{props.buttonText}</button></p>
                </div>
                </div>
                </div>
    )
}

export default countryCard