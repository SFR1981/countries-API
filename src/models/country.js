const Pubsub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')


const Country = function(){
  // might be something else
  this.text = null;

}

Country.prototype.getData = function () {
  const request = new Request('url');
  request.get((data)=>{
    this.text = data.country;
    PubSub.publish('Country:country-loaded', this.text);
  })
};


module.exports = Country;
