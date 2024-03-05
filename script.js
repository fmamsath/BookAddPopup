var popupOverlay = document.querySelector(".popup-overlay")
var popupBox = document.querySelector(".popup-box")
var addPopupButton = document.getElementById("popup-add-button")

addPopupButton.addEventListener('click',function(){
    popupOverlay.style.display="block"
    popupBox.style.display="block"
})


var cancelBookPopup = document.getElementById("cancel-book-popup")

cancelBookPopup.addEventListener('click',function(event) {
    event.preventDefault()
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})


var container = document.querySelector(".container")
var titleinput = document.getElementById("popup-title-input")
var authorinput = document.getElementById("popup-author-input")
var bookdescription = document.getElementById("popup-texarea-input")
var addbookpopup = document.getElementById("add-book-popup")

addbookpopup.addEventListener('click',function(event) {
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${titleinput.value}</h1>
    <h5>${authorinput.value}</h5>
    <p>${bookdescription.value}</p>
    <button onclick="def(event)">Delete</button>`
    container.append(div)
    popupOverlay.style.display="none"
    popupBox.style.display="none"
})

function def(event){
    event.target.parentElement.remove()
}