import React, { Component } from 'react';
import 'cou'

import countryHeader from '../../views/countryHeader/countryHeader';

class CountryList extends Component {
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
                <h1>{this.props.data.title}</h1> 
                {
                    countryHeader({
                        navigation: this.props.navigation
                      })
                }
                <section  class="countries">
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
                </section>
                    {
                        this.props.allCountries.length > this.props.visibleCountries.length && (
                            <button  className="button button--secondary button--load"  onClick={this.loadMoreCountries}>{CData.loadButton}</button>
                        )
                    }
            </div>
        )
    }
}

export default CountryList;