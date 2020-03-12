import React from 'react';
import './countryCard.scss';


function countryCard(props)
{
    return (
            <div class="wrapper">
                <div class="container">
                    <div class="top"></div>
                    <div class="bottom">
                        <div class="details">
                            <h5>Chair</h5>
                            <p>£250</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default countryCard