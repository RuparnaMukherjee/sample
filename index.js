function myFunction() {
  var x = document.getElementById("nav-headers-responsive");
  if (x.className === "nav-headers-responsive") {
    x.className += " responsive";
  } else {
    x.className = "nav-headers-responsive";
  }
}
