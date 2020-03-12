import React, { Component } from 'react';
//Stylesheet
import '../Countries/Countries.scss';
//JSOn
import CData  from './Countries,js'
// Components
import countryCard from '../../views/countryCard/countryCard';
//UTILITIES files
import {_initCountries,loadMoreCountries} from '../Countries/CountriesUtils';


class Countries extends Component {
    loadMoreCountries = () => { loadMoreCountries(this) };

    constructor(){
        super();
        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 8,
            "countryListError": false
        }
        
        _initCountries(this);
    }

    render(){
        return(
            <section class="countries">
                <h1>{CData.title}</h1> 
                <div className="country-list__countries">
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
                    {
                        this.state.allCountries.length > this.state.visibleCountries.length && (
                            <button  className="button button--secondary button--load"  onClick={this.loadMoreCountries}>{CData.loadButton}</button>
                        )
                    }
                </div>
            </section>
        )
    }
}

export default Countries;