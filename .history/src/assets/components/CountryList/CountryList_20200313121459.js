import React, { Component } from 'react';
import '../CountryList/CountryList.scss'

import countryCard from '../../views/countryCard/countryCard';
import { withRouter } from 'react-router-dom';

class CountryList extends Component {
    constructor() {
        super();

        this.state = {
            isMounted: false
        }

        this.mountTimeout = 0;
    }
    render(){
        return(
            <div>
                    <div className="country-list__countries center-block">
                        {
                            this.props.visibleCountries.map( (country,index) => {
                                return <React.Fragment key={index}>
                                {
                                    countryCard({
                                        imgSrc: country.flag,
                                        name: country.name,
                                        population: country.population,
                                        buttonText: this.props.data.countryBtnText,
                                        callback: () => this.props.history.push(`/${country.alpha3Code}`)
                                    })
                                }
                                </React.Fragment> 
                            })
                        }
                    </div>
                    {
                        this.props.allCountries.length > this.props.visibleCountries.length && (
                            <button  className="button button--secondary button--load"  onClick={this.loadMoreCountries}>{this.props.data.loadButton}</button>
                        )
                    }
            </div>
        )
    }
}

export default withRouter(CountryList);