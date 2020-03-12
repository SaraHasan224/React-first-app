import React, { Component } from 'react';

import '../Countries/Countries.scss';

import countryCard from '../../views/countryCard/countryCard';

class Countries extends Component {

    render(){
        return(
            <section class="countries">
                {countryCard({
                imgSrc: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
                name: "Country flag",
                population: 200,
                buttonText: "Click Me!",
                callback: null
                })}
            </section>

<section class="row">
    <div class="card__collection clear-fix">
    {countryCard({
                        imgSrc: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
                        name: "Country flag",
                        population: 200,
                        buttonText: "Click Me!",
                        callback: null
                    })}
    {countryCard({
                        imgSrc: "https://images.unsplash.com/photo-1480408144303-d874c5e12201?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=575213599ae24b3dbdfd84be79425c50&auto=format&fit=crop&w=634&q=80",
                        name: "Country flag",
                        population: 200,
                        buttonText: "Click Me!",
                        callback: null
                    })}
    <Countries/>
    <Countries/>
    </div>
    </section>
        )
    }
}

export default Countries;