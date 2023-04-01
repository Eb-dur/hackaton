function myFunction() {
    document.getElementById('i').innerHTML = "text changed";
  }


function open_sidebar() {
  let menu = document.getElementById("sidebar").style;
  menu.transition = "1s";
  menu.display = "block";
}

function close_sidebar() {
  let menu = document.getElementById("sidebar").style;
  menu.display = "none";
}