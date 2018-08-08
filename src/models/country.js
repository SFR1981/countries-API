const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')


const Country = function(){
  // might be something else
  this.data = null;

}

Country.prototype.getData = function () {
  //TWO - set up first publish : to send the stuff
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data)=> {
    this.data = data;
    PubSub.publish('Country:countries-ready', this.data);
  });
// FOUR MODEL: subscribes to change, to find the chosen item
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishCountryDetails(selectedIndex);
  })
};
//FOUR continued , the method to publish the change - to resultView
Country.prototype.publishCountryDetails = function (index) {
  const selectedCountry = this.data[index];
  console.log(selectedCountry);
  PubSub.publish('Country:selected-country-ready',selectedCountry)
};


module.exports = Country;
