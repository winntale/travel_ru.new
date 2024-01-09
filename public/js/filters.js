filterPlaceSelection("all")
function filterPlaceSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter Place");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    element_RemoveClass(x[i], "filter-show");
    if (x[i].className.indexOf(c) > -1) element_AddClass(x[i], "filter-show");
  }
}

filterHotelSelection("all")
function filterHotelSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter Hotel");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    element_RemoveClass(x[i], "filter-show");
    if (x[i].className.indexOf(c) > -1) element_AddClass(x[i], "filter-show");
  }
}

filterRestaurantSelection("all")
function filterRestaurantSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter Restaurant");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    element_RemoveClass(x[i], "filter-show");
    if (x[i].className.indexOf(c) > -1) element_AddClass(x[i], "filter-show");
  }
}

function element_AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function element_RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

var btnPlaceContainer = document.getElementById("filterPlaces-buttons");
var btnsPlace = btnPlaceContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btnsPlace.length; i++) {
  btnsPlace[i].addEventListener("click", function() {
    var currentPlace = document.getElementsByClassName("active");
    currentPlace[0].className = currentPlace[0].className.replace(" active", "");
    this.className += " active";
  });
}

var btnHotelContainer = document.getElementById("filterHotels-buttons");
var btnsHotel = btnHotelContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btnsHotel.length; i++) {
    btnsHotel[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[1].className = current[1].className.replace(" active", "");
      this.className += " active";
    });
  }

var btnRestaurantContainer = document.getElementById("filterRestaurants-buttons");
var btnsRestaurant = btnRestaurantContainer.getElementsByClassName("filter-btn");
for (var i = 0; i < btnsRestaurant.length; i++) {
    btnsRestaurant[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[2].className = current[2].className.replace(" active", "");
    this.className += " active";
    });
}