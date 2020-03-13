import React, { Component } from 'react';


class CountryD extends Component {
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
                    <div className="country-list__countries center-block">
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