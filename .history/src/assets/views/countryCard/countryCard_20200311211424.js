import React from 'react';
import countryCard from './countryCard.scss'
function countryCard(props)
{
    return (
        
        <div class="country card">
            <img src={props.imgSrc} alt="country-flag" />
            <h4>{props.name}</h4>
            <p>{props.population}</p>

            <button onClick={props.callback}>{props.buttonText}</button>
        </div>
    )
}

export default countryCard