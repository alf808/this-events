//Secret Menu Challenge!
/*Add event listeners to each restaurant name that will show and hide (toggle) the secret menu item for that particular restaurant.*/

var restaurantName = document.getElementsByClassName("name");
var restaurantMenu = document.getElementsByClassName("menu");

for (var i = 0, j = restaurantName.length; i < j; i++) {
	restaurantMenu[i].style.display = "none";
	restaurantName[i].addEventListener("click", toggle);
}

function toggle() {
	var sm = this.querySelector(".menu");
	if (sm.style.display === "none") {
		sm.style.display = "block";
	} else {
		sm.style.display = "none";
	}
}
