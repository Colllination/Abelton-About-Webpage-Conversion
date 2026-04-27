const moreBtn = document.querySelector(".more-btn");
const moreDropdown = document.querySelector(".more-dropdown");
const symbol = document.querySelector(".symbol");

moreBtn.addEventListener("click", function(){

moreDropdown.classList.toggle("show");

if(moreDropdown.classList.contains("show")){
symbol.textContent = "-";
}else{
symbol.textContent = "+";
}

});