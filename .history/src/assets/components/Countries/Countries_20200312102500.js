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
            "countryListError": false
        }
        this._initCountries(this);
    }

    _initCountries(context){
        fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
            context.setState( (state) => ( { 
                allCountries: data,
            } ));
          })
          .catch(function(error) {
            console.error(error);
            context.setState( (state) => ( {countryListError: true}));
          });
    }

    render(){
        console.log(this.state.allCountries[0]);
        return(
            <section class="row">
                <div class="card__collection clear-fix">
                    {
                        this.state.allCountries.map( (country,index) => {
                            return countryCard({
                                imgSrc: country.flag,
                                name: country.name,
                                population: country.population,
                                buttonText: "Click Me!",
                                callback: null
                            })
                        })
                    }
                </div>
            </section>
        )
    }
}

export default Countries;