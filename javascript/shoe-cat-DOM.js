// var searchBtn = document.querySelector(".search-button")
var searchBtn = document.querySelector(".search-button")
var display = document.querySelector(".display")

var brandSelect = document.getElementById("brand")
var sizeSelect = document.getElementById("size")
var colourSelect = document.getElementById("color")

var addToCart = document.getElementsByClassName(".btn btn-success btn-md")

var removeCartItems = document.getElementsByClassName(".removeFromCart")

// console.log(searchBtn)
var shoeFactory = shoeCatalogue()

var templateSource = document.querySelector(".shoes").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

var templateDisplay = document.querySelector(".shoe-display")
var userData = { shoe: shoeFactory.values().shoeObj }

var userDataHTML = userTemplate(userData)
templateDisplay.innerHTML = userDataHTML

searchBtn.addEventListener("click", function shoeFiltering() {

  var filteredData = { shoe: shoeFactory.filterShoeBrands(brandSelect.value, sizeSelect.value, colourSelect.value) }
  var filteredDataHTML = userTemplate(filteredData)
  templateDisplay.innerHTML = filteredDataHTML

  // templateDisplay.innerHTML = shoeFactory.values().noMatchMessage
});

// homeBtn.addEventListener("click", function getShoes() {

//   var homeData = { shoe: shoeFactory.getShoes() }
//   var homeDataHTML = userTemplate(homeData)
//   templateDisplay.innerHTML = homeDataHTML

// });

// addToCart.addEventListener("click", function addingToCart(){

  

// });

// for(var i=0; i < removeCartItems.length; i++){
//   var button = removeCartItems[i]
//   button.addEventListener("click", function(event){
//     var buttonClicked = event.target
//   })
// }