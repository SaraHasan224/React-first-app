import React, { Component } from 'react';

import '../Countries/Countries.scss';

import countryCard from '../../views/countryCard/countryCard';

class Countries extends Component {

    render(){
        return(
            <section class="countries">
                <div class="row">
                    <div class="card__collection clear-fix">
                    </div>
                </div>
                <div class="card__collection clear-fix">
                    
                </div>    
            </section>
        )
    }
}

export default Countries;