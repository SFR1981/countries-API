const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element){
  this.element = element;
}

SelectView.prototype.bindEvents = function () {
// ONE set up first subscription to get the stuff
  PubSub.subscribe('Country:countries-ready', (evt)=>{
    const allCountries = evt.detail;
    console.log(allCountries);
    this.populate(allCountries);
      })
//THREE
  this.element.addEventListener('change', (evt)=>{
    const selectedIndex = evt.target.value;
    // console.log(evt.target.value);
    PubSub.publish('SelectView:change', selectedIndex);

  });

};
// ONE (continued) the method called by first subscription method
SelectView.prototype.populate = function (allCountries) {
  allCountries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  })
};


module.exports = SelectView;
