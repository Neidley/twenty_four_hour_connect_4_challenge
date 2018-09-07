// IIFE to immediately render the javascript
(function() {
  // ASSIGNS A 2-d array/matrix representation of the Connect Four gameboard to matrix
  let matrix = [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],

    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],

    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
    [4, 3],
    [5, 3],
    [6, 3],

    [0, 2],
    [1, 2],
    [2, 2],
    [3, 2],
    [4, 2],
    [5, 2],
    [6, 2],

    [0, 1],
    [1, 1],
    [2, 1],
    [3, 1],
    [4, 1],
    [5, 1],
    [6, 1],

    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 0],
    [5, 0],
    [6, 0]
  ];

  //This for-loop will iterate over the matrix and create buttons in
  //the browser
  for (let i = 0; i < matrix.length; i++) {
    //ASSIGNS gameboard html div to gameboard
    let gameboard = document.querySelector(".overlay");

    //ASSIGNS each gameboard slot to index
    let index = document.createElement("button");
    index.innerText = matrix[i];
    console.log(index);
    index.className = "index";

    //append each index button to be children of the gameboard
    gameboard.appendChild(index);

    if (matrix[i][0] === 6) {
      gameboard.appendChild(document.createElement("br"));
    }
  }
})();
