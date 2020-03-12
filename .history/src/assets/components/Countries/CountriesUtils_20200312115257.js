import CONFIG from '../../Config';


function _initCountries(context){
    fetch(CONFIG.api).then((resp) => resp.json()).then(function(data) {
        context.setState( (state) => ( { 
            allCountries: data,
            visibleCountries: data.slice(0,state.countriesVisibleOnLoad)
        } ));
      })
      .catch(function(error) {
        console.error(error);
        context.setState( (state) => ( {countryListError: true}));
      });
}

function loadMoreCountries(context){
    // context.setState( (state) => ( { 
    //     visibleCountries: [state.allCountries]
    // } ));

    
  context.setState( (state) => ( { 
    visibleCountries: [...state.allCountries],
    countriesVisible: state.allCountries.length
  } ));
}


export {
    _initCountries,
    loadMoreCountries
}