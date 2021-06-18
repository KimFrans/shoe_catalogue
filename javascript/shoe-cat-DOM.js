var searchBtn = document.querySelector(".search-button")
var display = document.querySelector(".display")

var brandSelect = document.getElementById("brand")
var sizeSelect = document.getElementById("size")
var colourSelect = document.getElementById("color")

var addToCart = document.querySelector(".addToCart")

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

// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("cart-btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}