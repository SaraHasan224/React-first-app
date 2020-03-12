import React from 'react';
import './countryCard.scss';


function countryCard(props)
{
    return (
        <div class="country main-card mb-3 card">
            <div class="card-body"><h5 class="pb-3 card-title">Headers Gradient Background with Images</h5>
                <div class="row">
                    <div class="col-md-3">
                        <div class="dropdown-menu-header">
                            <div class="dropdown-menu-header-inner bg-mean-fruit">
                                <div class="menu-header-image">
                                    <img src={props.imgSrc} alt="country-flag" />
                                </div>
                                <div class="menu-header-content">
                                    <div>
                                        <h5 class="menu-header-title">{props.name}</h5>
                                        <h3 class="menu-header-title">{props.name}</h3>
                                        <h6 class="menu-header-subtitle">Manage all of your options</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
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