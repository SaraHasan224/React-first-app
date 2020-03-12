import React, { Component } from 'react';

import '../Countries/Countries.scss';

import countryCard from '../../views/countryCard/countryCard';

class Countries extends Component {

    render(){
        return(
            <section class="row">
                    <div class="card__collection clear-fix">
                        <div class="cards cards--two">

                        </div>
                    </div>
            </section>
        )
    }
}

export default Countries;