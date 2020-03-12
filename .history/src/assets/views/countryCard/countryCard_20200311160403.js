import React from 'react';

function countryCard(props)
{
    return (
        <div class="country card">
            <img src={props.imgSrc} alt="country-flag" />
            <h4>{props.name}</h4>
            <p>{props.population}</p>

            <button onClick={props}
        </div>
    )
}

export default countryCard