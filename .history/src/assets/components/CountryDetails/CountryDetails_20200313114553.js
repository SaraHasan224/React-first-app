import React, { Component } from 'react';
import '../CountryDetails/CountryDetails.scss'

import CData from './CountryDetails.json';

import {
    Link
  } from "react-router-dom";

  
class CountryDetails extends Component {
    
  constructor(props) {
    super(props);

    this.mountTimeout = 0;
    this.state = {
        isMounted: false,
      borderingCountries: this._initBorders()
    }
  }

  _initBorders() {
    let borders = [];

    for(let i=0; i < this.props.allCountries.length; i++) {
      if(this.props.data.borders.includes(this.props.allCountries[i].alpha3Code)) {

        borders.push({
          name: this.props.allCountries[i].name,
          alpha3Code: this.props.allCountries[i].alpha3Code
        });

        if(borders.length >= this.props.data.borders.length){
          break;
        }
      }
    }

    return borders;
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
        if(!this.props.data)
        {
            return null;
        }else{
            return(
                <div class="wrapper">
                    <div class="col-1-2">
                        <div class="product-wrap">
                        <div class="product-shot">
                            <img src="https://s3-us-west-2.amazonaws.com/hypebeast-wordpress/image/2009/10/smart-magazine-stussy-stock-link-tshirt-3.jpg" alt="" />
                        </div>
                        </div>
                    </div>
                    {this.props.data.capital}
                    country.flag
                    <div class="col-1-2">
                        <div class="product-info">
                        <h2>Stussy Varsity Raglan</h2>
                        <div class="desc">
                            <h4>{CData.description.descriptionTitle}</h4>
                            <p>
                            {CData.description.capital}
                            {this.props.data.capital}
                            </p>
                            <p>
                            {CData.description.languages}
                            {this.props.data.languages.map( (lang, index) => {
                                return <React.Fragment key={index}>{index > 0 && ", "}{lang.name}</React.Fragment>
                            })}
                            </p>
                            <p>
                            {CData.description.currencies}
                            {this.props.data.currencies.map( (currency, index) => {
                                return <React.Fragment key={index}>{index > 0 && ", "}{currency.name}</React.Fragment>
                            })}
                            </p>
                            <hr />
                            <div className="country-details__links">
                                <h4>{CData.borderCountries}</h4>
                                <div className="country-details__links__list">
                                    {this.state.borderingCountries.map( (bCountry, index) => {
                                    return <Link to={"/"+bCountry.alpha3Code} key={index}>{index > 0 && ", "}{bCountry.name}</Link>
                                    })}
                                    {this.state.borderingCountries.length === 0 && <p>{CData.noBordersFound}</p>}
                                </div>
                            </div>
                        </div>
                        <a href="" class="button">{CData.backBtn}</a>
                        </div>
                        
                    </div>
                </div>
            )
        }
    }
}

export default CountryDetails;