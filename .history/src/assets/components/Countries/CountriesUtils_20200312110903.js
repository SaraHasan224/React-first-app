import CONFIG from '../../Config';


func_initCountries(context){
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


export {
    _initCountries
}