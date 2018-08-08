const PubSub = require('../helpers/pub_sub.js');


const ResultView = function (container){
  this.container = container;
}

//five subscribe to the published chosen single item
ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:selected-country-ready', (evt)=>{
    const country = evt.detail;
    //call to update the view
    this.updateView(country);
  })

};


ResultView.prototype.updateView = function (country) {

  this.container.innerHTML = '';

  const name = document.createElement('h2');
  name.textContent = `${country.name}`;
  this.container.appendChild(name);

  const image = document.createElement('img');
  //image.setAttribute('src', country.flag);
  image.src = country.flag;
  this.container.appendChild(image);

  const regionTag = document.createElement('h3');
  regionTag.textContent = "Region:";
  this.container.appendChild(regionTag);

  const region = document.createElement('p');
  region.textContent = country.region;
  this.container.appendChild(region);

  const languageTag = document.createElement('h3');
  languageTag.textContent = "Languages:";
  this.container.appendChild(languageTag);
  console.log(country.languages);

  const list = document.createElement('ul');

  country.languages.forEach((language) =>{
    const listElement = document.createElement('li');
    listElement.textContent = language.name;
    list.appendChild(listElement);
  });

this.container.appendChild(list);


};


module.exports = ResultView;
