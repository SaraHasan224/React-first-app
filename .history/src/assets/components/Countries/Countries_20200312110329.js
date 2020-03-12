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
        this.state = {
            "allCountries": [],
            "visibleCountries": [],
            "countriesVisibleOnLoad": 8,
            "countryListError": false
        }
        this._initCountries(this);
    }

    _initCountries(context){
        fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
            context.setState( (state) => ( { 
                allCountries: data,
                visibleCountries: data.slice(0,state.countriesVisibleOnLoad)
            } ));
          })
          .catch(function(error) {
            console.error(error);
            context.setState( (state) => ( {countryListError: true}));
          });
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