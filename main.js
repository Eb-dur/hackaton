function myFunction() {
    document.getElementById('main_context').innerHTML = `
    <div id="allProjectsDiv">

    <div class="screen_elem">
        <a href="https://github.com/Eb-dur/hackaton">
            <div class="projectDiv">
                <img src="hackathon_img.png" alt="GOTO10 workspace">
                <div class="project_Text">
                    <h2 class="projectName">Hackathon Project</h2>
                    <p class="projectDesc"> During the Hackathon 2023 we created this website, click here to see how we did it. </p>
                </div>
            </div>
        </a>
    </div>



    <div class="screen_elem">
        <a href="https://www.youtube.com/watch?v=g3jCAyPai2Y&ab_channel=SenshiOngaku">
            <div class="projectDiv">
                <img src="baka_mitai.png" alt="Kiryu from Yakuza">
                <div class="project_Text">
                    <h2 class="projectName">Bakamitai</h2>
                    <p class="projectDesc"> Bakamitai is a sad song everyone should hear at least oince in their life. </p>
                </div>
            </div>
        </a>
    </div>


    <div class="screen_elem">
        <div class="projectDiv">
            <img src="images.jpg" alt="Tony Stark">
            <div class="project_Text">
                <h2 class="projectName">BRUH!!</h2>
                <p class="projectDesc"> what should i even put here </p>
            </div>
        </div>
    </div>


    <div class="screen_elem">
        <div class="projectDiv">
            <img src="BonziSunglasses.webp" alt="Bonzi Buddy">
            <div class="project_Text">
                <h2 class="projectName">Bonzi Buddy</h2>
                <p class="projectDesc"> only intellectualls would know bonzi buddy </p>
            </div>
        </div>
    </div>



    <div class="screen_elem">
        <div class="projectDiv">
            <img src="cool-cat-wallpaper-1.jpg" alt="Cool Cat">
            <div class="project_Text">
                <h2 class="projectName">Cat</h2>
                <p class="projectDesc"> It´s just a picture of a cat</p>
            </div>
        </div>
    </div>

    <div class="screen_elem">
        <button   type="button" class="projectDiv"  onclick="remove_displey()">
            <img class="projectImg" src="tic_tac_toe.jpg" alt="Tony Stark">
            <div class="project_Text">
                <h2 class="projectName">TIC TAC TOE</h2>
                <p class="projectDesc"> play tic tac toe </p>
            </div>
        </a>
    </div>


    <button type="button" class="button" id="rick_roll" onclick="window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');return false;"></button>

</div>`
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
  document.getElementById("main_context").innerHTML = `
  <div class="tic_tac_toe">
    <div class="board">
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
      <div class="cell" data-cell></div>
    </div>
    <div class="winning-message" id="winningMessage">
      <div id="winningMessageText"></div>
      <button id="restartButton">Restart</button>
    </div>
  </div>
</body>
  `;
  }