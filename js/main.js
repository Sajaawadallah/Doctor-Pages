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


// the country dropdown

const main_country = document.getElementsByClassName("country");
const all_countres = document.getElementsByClassName("all-countres");
let arr = [];
const arr1 = [];

arr = [...all_countres].map(i => i.getElementsByTagName('a'))
for (let index = 0; index < arr.length; index++) {
    [...arr[index]].map(l => arr1.push(l))

}

arr1.map(m => m.onclick = function () {

    [...main_country].map(elem => elem.innerHTML = m.innerHTML)

})
console.log(arr1)


