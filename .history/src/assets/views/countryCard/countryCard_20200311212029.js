import React from 'react';
import countryCard from './countryCard.scss'
function countryCard(props)
{
    return (
        <div class="country card">
            <div class="about">
                <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
                    <span class="icon"></span>
                </a>
                <a class="bg_links logo"></a>
            </div>
        </div>
    )
}

export default countryCard