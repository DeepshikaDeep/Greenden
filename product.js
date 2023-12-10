//selecting side navbar menuicon

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")

var closenav = document.getElementById("close-nav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

//search product

var productcontainer = document.getElementById("product-container");
var search = document.getElementById("search");
var productlist = productcontainer.querySelectorAll("div");

search.addEventListener("keyup", function(event) {
    var enteredvalue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelectorAll("h1")[0].textContent;
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }
});
