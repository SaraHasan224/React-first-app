import React, { Component } from 'react';
//Stylesheet
import '../Countries/Countries.scss';
// Components
import countryCard from '../../views/countryCard/countryCard';
//UTILITIES files
import {_initCountries} from '.;/////';


class Countries extends Component {
    constructor(){
        super();
        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 8,
            "countryListError": false
        }
        this._initCountries(this);
    }

    

    render(){
        return(
            <section class="row">
                <div class="card__collection clear-fix">
                    {
                        this.state.visibleCountries.map( (country,index) => {
                            return <React.Fragment key={index}>
                            {
                                countryCard({
                                    imgSrc: country.flag,
                                    name: country.name,
                                    population: country.population,
                                    buttonText: "View",
                                    callback: null
                                })
                            }
                            </React.Fragment> 
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Countries;