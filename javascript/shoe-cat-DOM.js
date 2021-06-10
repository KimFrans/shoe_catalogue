var shoeFactory = shoeCatalogue()

var templateSource = document.querySelector(".shoes").innerHTML;

// compile the template
var userTemplate = Handlebars.compile(templateSource);

var templateDisplay = document.querySelector(".shoe-display")
var userData = {shoe: shoeFactory.values().shoeObj}

var userDataHTML = userTemplate(userData)
templateDisplay.innerHTML = userDataHTML

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }