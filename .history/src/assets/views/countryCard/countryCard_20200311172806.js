import React from 'react';
import './countryCard.scss';


function countryCard(props)
{
    return (
        <div class="country card">
            <div class="card-body">
                <img src={props.imgSrc} alt="country-flag" />
                <h4>{props.name}</h4>
                <p>{props.population}</p>

                <button onClick={props.callback}>{props.buttonText}</button>
            </div>
        </div>
    )
}

export default countryCard