var app = function(){
  // var url = "https://restcountries.eu/rest/v2";
  // makeRequest(url, requestComplete);
  var countryButton = document.getElementById('country-button');
  countryButton.addEventListener("click", clickButton)

  var giniButton = document.getElementById('gini-button');
  giniButton.addEventListener("click", clickGini);

  var dropdown = document.getElementById('countrySelect');
  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, requestDropdownComplete);
  // dropdown.addEventListener("change", makeRequest)
}

var requestDropdownComplete = function() {
// "this" currently refers to XMLHttpRequest object (the event listener puts this to the request object)
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // var firstCountry = countries[0];
  // console.log(firstCountry);

  populateDropdownList(countries);
}

var populateDropdownList = function(countries) {
  var select = document.getElementById('dropDownSelect');

  countries.forEach(function(country) {
    var option = document.createElement('option');
    option.innerText = country.name;
    select.appendChild(option);
  });
}




var clickButton = function(){
  console.log("button was clicked")
  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();

  request.open("GET", url);
  
  request.addEventListener("load", callback);

  request.send();
}

var requestComplete = function() {
// "this" currently refers to XMLHttpRequest object (the event listener puts this to the request object)
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // var firstCountry = countries[0];
  // console.log(firstCountry);

  populateList(countries);
}

var populateList = function(countries) {
  var ul = document.getElementById('country-list');

  countries.forEach(function(country) {
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  });
}





var clickGini = function(){
  console.log("gini button was clicked");
  var url = "https://restcountries.eu/rest/v2";
  makeRequest(url, giniRequestComplete);
}

var giniRequestComplete = function(){
  if(this.status !== 200) return;

  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);

  populateGiniList(countries)
}

var populateGiniList = function(countries) {
  var ul = document.getElementById('gini-list');

  countries.forEach(function(country) {
    var li = document.createElement('li');
    li.innerText = country.name + ": " + country.gini;
    ul.appendChild(li);
  });
}



window.addEventListener('load', app);