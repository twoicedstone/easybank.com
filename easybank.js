const openMenu = document.getElementById("mobilemenu");
const closeMenu = document.getElementById("menuclose");

openMenu.addEventListener("click", () => {
	document.querySelector(".mobilecard").style.display = "flex";
	document.getElementById("phones").style.visibility = "hidden";
	document.querySelector(".container").style.filter = "contrast(60%)";
})

closeMenu.addEventListener("click", () => {
	document.querySelector(".mobilecard").style.display = "none";
	document.getElementById("phones").style.visibility = "visible";
	document.querySelector(".container").style.filter = "none";
})

window.addEventListener("resize", () => {
	document.querySelector(".mobilecard").style.display = "none";
	document.getElementById("phones").style.visibility = "visible";
	document.querySelector(".container").style.filter = "none";
})