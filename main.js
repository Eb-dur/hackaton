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

function remove_displey(){


  var elem = document.getElementById("allProjectsDiv");
  var main = document.getElementById("main_context");
  elem.remove();




  var tictactoe = document.createElement('div');
  tictactoe.classList.add('tic_tac_toe');
  main.appendChild(tictactoe);
  }