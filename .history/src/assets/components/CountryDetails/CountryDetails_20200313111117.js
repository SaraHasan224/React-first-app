import React, { Component } from 'react';

class CountryDetails extends Component {
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
                        
                    </div>
            </div>
        )
    }
}

export default CountryDetails;