//Secret Menu Challenge
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/


var showMenu = document.getElementsByClassName("name");

for(var i = 0; i<showMenu.length; i++){
  showMenu[i].addEventListener("click", displayMenu);
}

function displayMenu(){
var toggleMenu = this.querySelectorAll(".menu")[0];
if(toggleMenu.style.display === "none"){
toggleMenu.style.display = "block";
}else{
  toggleMenu.style.display = "none";
  }
}