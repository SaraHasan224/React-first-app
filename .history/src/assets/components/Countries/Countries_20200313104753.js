import React, { Component } from 'react';
//Stylesheet
import '../Countries/Countries.scss';
//JSOn
import CData  from './Countries.json'
// Components
import countryCard from '../../views/countryCard/countryCard';
import countryHeader from '../../views/countryHeader/countryHeader';
//UTILITIES files
import {_initCountries,loadMoreCountries,sortNumerically,sortAlphabetically} from '../Countries/CountriesUtils';


class Countries extends Component {
    loadMoreCountries = () => { loadMoreCountries(this) };

    constructor(){
        super();
        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 8,

            "countryListError": false,
            "countriesSortedAlph": true,
            "countriesNum": false,

            "navigation":  [
                {
                    "title" : "Home",
                    "link": ""
                },
                {
                    "title" : "Sort A - Z",
                    "link": () => sortAlphabetically(this)
                },
                {
                    "title" : "Sort by Population",
                    "link": () => sortNumerically(this)
                }
            ]
        }
        
        _initCountries(this);
    }

    render(){
        return(
            <div>
                <h1>{CData.title}</h1> 
                {
                    countryHeader({
                        navigation: this.state.navigation
                      })
                }
                <section  class="countries">
                    </section>
                    {
                        this.state.allCountries.length > this.state.visibleCountries.length && (
                            <button  className="button button--secondary button--load"  onClick={this.loadMoreCountries}>{CData.loadButton}</button>
                        )
                    }
            </div>
        )
    }
}

export default Countries;