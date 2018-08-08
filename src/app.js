const Country = require('./models/country.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  //get the counrties
  const country = new Country();
//  country.getData();
 const dropdown = document.querySelector('select#countries');
 const selectView = new SelectView(dropdown);
// selectView.bindEvents();
 const display = document.querySelector('div#country');
 const resultView = new ResultView(display);
 //resultView.bindEvents(); 

});
