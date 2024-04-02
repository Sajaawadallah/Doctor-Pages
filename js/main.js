//  invoke animation function  
new WOW().init();





// stiky header

window.onscroll = function () {
    yFunction()
};

// Get the header
var header = document.getElementById("myheader");


var sticky = header.offsetTop;


function yFunction() {
    if (window.pageYOffset > sticky) {
        // header.style.display = "block";
        header.classList.add("sticky")
    } else {
        // header.style.display = "none";
        header.classList.remove("sticky")
    }
}