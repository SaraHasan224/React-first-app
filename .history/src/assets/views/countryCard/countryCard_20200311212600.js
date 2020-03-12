import React from 'react';
import './countryCard.scss'
function countryCard(props)
{
    return (
        <div class="country card">
            <div class="card__collection clear-fix">
                <div class="cards cards--two">
                    <img src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d702cb99ca804bffcfa8820c46483264&auto=format&fit=crop&w=651&q=80" class="img-responsive" alt="Cards Image"/>
                    <span class="cards--two__rect"></span>
                    <span class="cards--two__tri"></span>
                    <p>Lucy Grace</p>
                </div>
                <div class="cards cards--three">
                    <img src="https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80" class="img-responsive" alt=""/>
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