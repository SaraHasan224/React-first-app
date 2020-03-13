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
                    {/* <div className="country-list__countries center-block"> */}
                        <div class="wrapper">
                        
                        <div class="col-1-2">
                            <div class="product-wrap">
                            <div class="product-shot">
                                <img src="https://s3-us-west-2.amazonaws.com/hypebeast-wordpress/image/2009/10/smart-magazine-stussy-stock-link-tshirt-3.jpg" alt="" />
                            </div>
                            </div>
                        </div>
                        
                        <div class="col-1-2">
                            <div class="product-info">
                            <h2>Stussy Varsity Raglan</h2>
                            <div class="desc">
                                From its humble origins as a surfwear brand, Stussy has gone on to become one of the biggest streetwear labels in the industry. Mixing various influences ranging from surf to music and everything in between, Stussy and it’s iconic signature graphic has grown to encapsulate a full range of apparel, home goods and limited-edition collaborations. 100% premium cotton raglan tee with 3/4 -length contrasting sleeves and graphic print on chest.
                            </div>
                            <ul class="sizing-list">
                                <li class="size">S</li>
                                <li class="size active">M</li>
                                <li class="size">L</li>
                            </ul>
                            <a href="" class="button">Add to Cart</a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default CountryDetails;