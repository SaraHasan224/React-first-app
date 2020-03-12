import React from 'react';
import './countryCard.scss'


function countryCard(props)
{
    return (
                // <div class="cards cards--two">
                            {/* <img src={props.imgSrc} alt="country-flag" class="img-responsive" />
                            <span class="cards--two__rect"></span>
                            <span class="cards--two__tri"></span>
                            <p class="first">{props.name} </p>
                            <p class="second">{props.population} </p>
                            <p class="third"><button onClick={props.callback}>{props.buttonText}</button></p> */}
                </div>

                <div className="country-card">
                    <div className="country-card__image">
                        <img src={props.imgSrc} alt="country-flag"></img>
                    </div>
                    <h4>{props.name}</h4>
                    <p>{props.population}</p>

                    <button className="button button--primary" 
                        onClick={props.callback}>{props.buttonText}</button>
                </div>
    )
}

export default countryCard