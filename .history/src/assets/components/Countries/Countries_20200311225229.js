import React, { Component } from 'react';
//Stylesheet
import '../Countries/Countries.scss';
// Components
import countryCard from '../../views/countryCard/countryCard';
//Config files
import CONFIG from '../../Config';


class Countries extends Component {
    constructor(){
        super();
        this.setState = {
            "allCountries": [],
            "cpi"
        }
    }

    _initCountries(){
        fetch('')   
    }

    render(){
        return(
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
                </div>
            </section>
        )
    }
}

export default Countries;