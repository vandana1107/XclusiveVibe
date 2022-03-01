var navbar = document.getElementById("navbar");
function showMenu() {
    navbar.style.right = "0";
}
function hideMenu() {
    navbar.style.right = "-300px";
}

var MainImage = document.getElementById('MainImage');
var smallImg = document.getElementsByClassName('small-img');

smallImg[0].onclick = function () {
    MainImage.src = smallImg[0].src;
}
smallImg[1].onclick = function () {
    MainImage.src = smallImg[1].src;
}
smallImg[2].onclick = function () {
    MainImage.src = smallImg[2].src;
}
smallImg[3].onclick = function () {
    MainImage.src = smallImg[3].src;
}