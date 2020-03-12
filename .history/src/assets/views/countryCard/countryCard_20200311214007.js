import React from 'react';
import './countryCard.scss'


function countryCard(props)
{
    return (
        <div class="country card">
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src={props.imgSrc} alt="country-flag" class="img-responsive" alt="Cards Image"/>
                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p class="first">{props.name} </p>
                    <p class="second">{props.population} </p>
                    <p class="third"><button onClick={props.callback}>{props.buttonText}</button></p>
                </div>
                <div class="cards cards--three">
                    <img src="" class="img-responsive" alt=""/>
                        <span class="cards--three__rect-1">
                            <span class="shadow-1"></span>
                            <p>Chris Levnon</p>
                        </span>
                        <span class="cards--three__rect-2">
                            <span class="shadow-2"></span>
                        </span>
                        <span class="cards--three__circle"></span>
                </div>
            </div>
        </div>
    )
}

export default countryCard