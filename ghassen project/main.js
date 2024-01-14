
const textPara = "Welcome to my site . I lope you have an experince .If you like my website and its content , follow me on my page on other social media sites"
const typingSprrd = 50; 
let carIndex = 0;
function typeText(){
    let para = document.querySelector(".para")
    if (carIndex < textPara.length){
        para.innerHTML += textPara[carIndex]
        carIndex++;
        setTimeout(typeText , typingSprrd)
    }

}
document.addEventListener("DOMContentLoaded",typeText)

function nn(){
    document.querySelector("header .header-rigth ul").style.display = "none"
    document.querySelector("header .center").style.display = "none"
    document.querySelector(".madia-nav-bar").style.display = "none"
    document.querySelector(".madia-nav-bar h4").style.display = "none"
    document.querySelector(".close-madia-nav-bar").style.display = "none"
}

function addnavbartoleft(){
    document.querySelector("header .header-rigth ul").style.display = "block"
    document.querySelector("header .center").style.display = "block"
    document.querySelector(".madia-nav-bar").style.display = "block"
    document.querySelector(".madia-nav-bar h4").style.display = "block"
    document.querySelector(".close-madia-nav-bar").style.display = "block"

}