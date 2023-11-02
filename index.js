/*https://kodim.cz/vyvoj-webu/js1/lekce/dom-innerhtml/cv-manipulace/novinky*/

const bodyElement = document.querySelector("body")
bodyElement.style.backgroundColor = "#e9e9e9"

const novinky = document.querySelector(".news")
novinky.style.backgroundColor = "white"
novinky.style.maxWidth = "60rem"


const heading1 = document.querySelector("h1")
heading1.textContent = "Aktuální novinky"
heading1.className = "news__title"

const firstnew = document.querySelector("#zprava1")
firstnew.className = "post--main"

const thirdnew = document.querySelector("#thirdpicture")
thirdnew.src = "images/zprava3-novy.jpg"