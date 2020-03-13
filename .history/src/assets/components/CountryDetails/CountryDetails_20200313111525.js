import React, { Component } from 'react';
import '../CountryDetails/CountryDetails.scss'

import countryCard from '../../views/countryCard/countryCard';

class CountryDetails extends Component {
    constructor() {
        super();

        this.state = {
            isMounted: false
        }

        this.mountTimeout = 0;
    }

    componentDidMount() {
        this.mountTimeout = setTimeout( () => {
            this.setState( (state) => ({isMounted: true}))
    }, 0)
    }

    componentWillUnmount() {
        clearTimeout(this.mountTimeout);
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
                                        callback: null
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

export default CountryDetails;