function openMenu(foodType) {
    var i;
    var x = document.getElementsByClassName("food");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(foodType).style.display = "block";
}