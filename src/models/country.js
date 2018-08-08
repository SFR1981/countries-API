const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')


const Country = function(){
  // might be something else
  this.data = null;

}

Country.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');
  request.get((data)=> {
    this.data = data;
    PubSub.publish('Country:countries-ready', this.data);
  });
};


module.exports = Country;
