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
                                
                            })
                        }
                    </div>
            </div>
        )
    }
}

export default CountryDetails;