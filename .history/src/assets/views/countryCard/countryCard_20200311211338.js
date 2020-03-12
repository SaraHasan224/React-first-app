import React from 'react';
import countryCard from './countryCard.scss'
function countryCard(props)
{
    return (
        
        <div class="wrapper">
            <div class="container">
                <div class="top"></div>
                <div class="bottom">
                    <div class="details">
                    <h4>{props.name}</h4>
                    <p>{props.population}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="country card">
            <img src={props.imgSrc} alt="country-flag" />
            

            <button onClick={props.callback}>{props.buttonText}</button>
        </div>
    )
}

export default countryCard