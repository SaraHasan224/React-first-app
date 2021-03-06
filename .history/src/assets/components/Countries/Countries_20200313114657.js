import React, { Component } from 'react';
//Stylesheet
import '../Countries/Countries.scss';
//JSOn
import CData  from './Countries.json'
// Components
import CountryList from '../CountryList/CountryList';
import CountryDetails from '../CountryDetails/CountryDetails';
//Views
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
                    <CountryList
                        data={CData}
                        navigation={this.state.navigation}
                        allCountries={this.state.allCountries}
                        visibleCountries={this.state.visibleCountries}
                        loadMoreCallback={this.loadMoreCountries}
                    />
                </section>
                <section  class="countries">
                    <CountryDetails
                        data={this.state.allCountries[0]}
                        allCountries={this.state.allCountries}
                    />
                </section>
            </div>
        )
    }
}

export default Countries;