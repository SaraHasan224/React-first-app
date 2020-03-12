import React from 'react';

function countryCard(props)
{
    return (
        <div class="country card">
            <img src={props.imgSrc} alt="country-flag" />
            <h4></h4>
        </div>
    )
}

export default countryCard