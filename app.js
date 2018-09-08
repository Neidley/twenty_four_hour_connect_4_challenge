// IIFE to immediately render the javascript
(function() {

  // ASSIGNS A 2D array/matrix representation of the Connect Four gameboard to matrix
  const matrix = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5],
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4],
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1],
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]
  ];

  //For-loop iterates over the matrix and creates buttons in
  //the browser
  for (let i = 0; i < matrix.length; i++) {
    //ASSIGNS overlay html div to gameboard
    var gameboard = document.querySelector(".gameboard");

    //ASSIGNS each gameboard slot to index
    var index = document.createElement("button");
    index.innerText = matrix[i];
    index.className = matrix[i][0];
    index.setAttribute("style", "background-color: #4C6EA6");
    index.addEventListener("click", onClick);

    //append each index button to be children of the gameboard
    gameboard.appendChild(index);

    //make buttons display on next line using html br element after every 7th button
    if (matrix[i][0] === 6) {
      gameboard.appendChild(document.createElement("br"));
    }
  }

  //Each successful onClick switches playerTurn between red and black
  //Red plays first
  var playerTurn = "red";

  //Store available slots in column arrays
  //My thought is this will make it easier to update available slots
  var column0 = [5, 4, 3, 2, 1, 0];
  var column1 = [5, 4, 3, 2, 1, 0];
  var column2 = [5, 4, 3, 2, 1, 0];
  var column3 = [5, 4, 3, 2, 1, 0];
  var column4 = [5, 4, 3, 2, 1, 0];
  var column5 = [5, 4, 3, 2, 1, 0];
  var column6 = [5, 4, 3, 2, 1, 0];

  //create onClick function
  function onClick(e) {
    let target = e.target;
    var current_column = document.getElementsByClassName(target.className);

    //onClick function only works on top row of buttons
    //(chips must be placed into the top)
    //When the top of a column is clicked it changes
    //the lowest available button in that column to either red or black
    //depending on playerTurn
    //Change playerTurn red to black, or black to red after each turn
    if (target.innerText[2] === "5") {

      //console.logs each button in the column that was clicked
      for (let i = 0; i < current_column.length; i++) {

        //if column is already full, do nothing
        if (current_column[i].style.backgroundColor === "red" || current_column[i].style.backgroundColor === "black") {
          return;

        //if you get to the bottom of the column and it's empty, set space to
        //appropriate color according to playerTurn then change playerTurn
        } else if (current_column[i].innerText[2] === "0") {
          current_column[i].style.backgroundColor = playerTurn;
          if (playerTurn === "black") {
            playerTurn = "red";
          } else if (playerTurn === "red") {
            playerTurn = "black";
          }
          return;

        //if the next space is empty, continue to that space
        } else if (current_column[i+1].style.backgroundColor === "rgb(76, 110, 166)"){
          continue;

        //if the next space is occupied, set space to appropriate color according
        //to playerTurn then change playerTurn
        } else if (current_column[i+1].style.backgroundColor === "red" || current_column[i+1].style.backgroundColor === "black") {
          current_column[i].style.backgroundColor = playerTurn;
          if (playerTurn === "black") {
            playerTurn = "red";
          } else if (playerTurn === "red") {
            playerTurn = "black";
          }
          return;
        }
      }

    }

  //TODO: At the end of the onClick function, check for vertical connect-four win

  //TODO: At the end of the onClick function, check for horizontal connect-four win

  //TODO: At the end of the onClick function, check for diagonal connect-four win

  //TODO: "Print the board after each turn"

  }

})();
